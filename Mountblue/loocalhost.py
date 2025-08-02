from flask import Flask, request, jsonify
import pandas as pd
import os

app = Flask(__name__)
FILE_PATH = "/home/saikumar-palla/Downloads/convert.xlsx"


# Utility function to check if the file exists
def file_exists():
    return os.path.exists(FILE_PATH)


# READ (Retrieve data from the Excel file)
@app.route("/read", methods=["GET"])
def read_data():
    if not file_exists():
        return jsonify({"error": "File not found!"}), 404
    df = pd.read_excel(FILE_PATH)
    return jsonify(df.to_dict(orient="records"))


# CREATE (Add new rows to Excel)
@app.route("/create", methods=["POST"])
def create_data():
    if not file_exists():
        return jsonify({"error": "File not found!"}), 404
    
    data = request.json
    if not data:
        return jsonify({"error": "No data provided!"}), 400
    
    df = pd.read_excel(FILE_PATH)
    new_df = pd.DataFrame(data)
    updated_df = pd.concat([df, new_df], ignore_index=True)
    updated_df.to_excel(FILE_PATH, index=False)
    return jsonify({"message": "Data added successfully!"})


# UPDATE (Modify existing rows in Excel)
@app.route("/update", methods=["PUT"])
def update_data():
    if not file_exists():
        return jsonify({"error": "File not found!"}), 404
    
    updates = request.json
    if not updates:
        return jsonify({"error": "No data provided!"}), 400

    df = pd.read_excel(FILE_PATH)

    for update in updates:
        row_index = update.get("index")
        if row_index is not None and row_index < len(df):
            for key, value in update.items():
                if key != "index":
                    df.at[row_index, key] = value
    
    df.to_excel(FILE_PATH, index=False)
    return jsonify({"message": "Data updated successfully!"})


# DELETE (Delete rows from Excel)
@app.route("/delete", methods=["DELETE"])
def delete_data():
    if not file_exists():
        return jsonify({"error": "File not found!"}), 404
    
    row_indexes = request.json.get("indexes", [])
    if not row_indexes:
        return jsonify({"error": "No indexes provided!"}), 400

    df = pd.read_excel(FILE_PATH)
    df = df.drop(row_indexes).reset_index(drop=True)
    df.to_excel(FILE_PATH, index=False)
    return jsonify({"message": "Rows deleted successfully!"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
