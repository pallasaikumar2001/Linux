package org.example;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class MainTest {
    static {
        baseURI="https://reqres.in";
    }
    @Test
    public void test_1(){
        given()
                .queryParam("page",2)
                .when()
                .get("/api/users")
                .then()
                .statusCode(200)
                .body("page",equalTo(2));
    }
}