package org.example;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class MainTest {

    // Base URI setup
    static {
        baseURI = "https://reqres.in";
    }

    @Test
    public void testGetUsers() {
        given()
                .get("/api/users?page=2")
                .then()
                .log().all()
                .statusCode(200)
                .body("data.size()", greaterThan(0)); // Validates non-empty user list
    }

    @Test
    public void testCreateUser() {
        given()
                .body("{\"name\": \"John\", \"job\": \"Developer\"}")
                .when()
                .post("/api/users")
                .then()
                .log().all()
                .statusCode(201);
//                .body("name", equalTo("John"))  // Validates 'name' in response
//                .body("job", equalTo("Developer")); // Validates 'job' in response
    }
}
