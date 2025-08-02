package org.example;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class MainTest {

    static {
        RestAssured.baseURI = "https://reqres.in";
    }

    @Test
    public void testGetUsers() {
        Response response = given()
                .when()
                .get("/api/users?page=2");
        System.out.println("GET Response:");
        System.out.println(response.prettyPrint());
        response.then()
                .statusCode(200)
                .body("page", equalTo(2))
                .body("data", not(emptyArray()));
    }

    @Test
    public void testCreateUser() {
        String requestBody = """
            {
                "name": "John Doe",
                "job": "developer"
            }
        """;

        Response response = given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .when()
                .post("/api/users");

        System.out.println("POST Response:");
        System.out.println(response.prettyPrint());
        response.then()
                .statusCode(201)
                .body("name", equalTo("John Doe"))
                .body("job", equalTo("developer"));
    }

    @Test
    public void testUpdateUser() {
        String requestBody = """
        {
            "name": "Jane Doe",
            "job": "manager"
        }
    """;

        Response response = given()
                .header("Content-Type", "application/json")
                .body(requestBody)
                .when()
                .put("/api/users/2");

        System.out.println("PUT Response:");
        System.out.println(response.prettyPrint());

        response.then()
                .statusCode(200)
                .body("name", equalTo("Jane Doe"))
                .body("job", equalTo("manager"));
    }


    @Test
    public void testDeleteUser() {
        Response response = given()
                .when()
                .delete("/api/users/2");
        System.out.println("DELETE Response:");
        System.out.println("Status Code: " + response.statusCode());
        response.then()
                .statusCode(204);
    }
}


