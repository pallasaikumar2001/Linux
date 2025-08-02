package org.example;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

class MainTest {

    @Test
    public void test1() {
        System.out.println("Running test1: Fetch list of users from Page 2");

        Response response = RestAssured.get("https://reqres.in/api/user?page=2");
        System.out.println("Status Code: " + response.getStatusCode());
        System.out.println("Response Body:");
        System.out.println(response.prettyPrint());
        System.out.println("Content-Type: " + response.getHeader("Content-Type"));
        System.out.println("Time Taken: " + response.getTime() + " ms");

        assertEquals(200, response.getStatusCode(), "Expected status code is 200");
        assertTrue(response.getHeader("Content-Type").contains("application/json"), "Expected Content-Type to be JSON");
        assertTrue(response.getBody().asString().contains("page"), "Response should include 'page'");
    }

    @Test
    public void test2() {
        System.out.println("Running test2: Fetch details of user with ID 2");

        Response response = RestAssured.get("https://reqres.in/api/users/2");

        System.out.println("Status Code: " + response.getStatusCode());
        System.out.println("Response Body:");
        System.out.println(response.prettyPrint());

        assertEquals(200, response.getStatusCode(), "Expected status code is 200");
        assertTrue(response.getBody().asString().contains("data"), "Response should include 'data'");
        assertTrue(response.getBody().asString().contains("email"), "Response should include 'email'");
    }
}
