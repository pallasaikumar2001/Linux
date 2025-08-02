package org.example;

import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import org.testng.annotations.Test;
public class MainTest {
    static {
        baseURI="https://reqres.in";
    }
    @Test
    public void test1(){
        given()
                .get("/api/users?page=2")
                .then()
                .statusCode(200)
                .body("page",equalTo(2))
                .body("data[0].email",notNullValue())
                .log().all();
    }

}