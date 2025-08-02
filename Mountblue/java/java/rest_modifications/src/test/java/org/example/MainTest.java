package org.example;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.testng.Assert.*;

public class MainTest {
    @Test
    public void test_1(){
        given().
                get("https://reqres.in/api/users?page=2").
                then().
                statusCode(200).
                log().all();


    }
}