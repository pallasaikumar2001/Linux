package org.example;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class MainTest {

  @Test
  public void testGetUsersApi() {
    // Set Base URI
    RestAssured.baseURI = "https://reqres.in";

    // Perform GET request
    Response response = RestAssured
            .given()
            .when()
            .get("/api/users?delay=3");

    // Print response
    System.out.println(response.prettyPrint());

    // Assert the status code
    assertEquals(200, response.getStatusCode(), "Status code should be 200");
  }
}
