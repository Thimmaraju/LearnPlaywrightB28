import { expect, test } from "@playwright/test";
import fs from 'fs';


test('Get API', async ({ request }) => {

  const getAllUsers = await request.get(`https://reqres.in/api/users?page=2`);


  expect(getAllUsers.ok()).toBeTruthy();
  expect(getAllUsers.status()).toBe(200);

  console.log(await getAllUsers.json())

  const response = await getAllUsers.json()

  expect(response.page).toBe(2)
  expect(response).toHaveProperty('total_pages');
  expect(response.total_pages).toBe(2);


  expect(response.data[0].email).toBe("michael.lawson@reqres.in")

  expect(response.data[0].first_name).toBe("Michael")



});


test('POST API', async ({ request }) => {

  const createUser = await request.post(`https://reqres.in/api/users`,
    {
      headers: { "x-api-key": "reqres-free-v1" },
      data: {
        "name": "Mohan",
        "job": "student"
      }
    });
  expect(createUser.ok()).toBeTruthy();
  expect(createUser.status()).toBe(201);

  console.log(await createUser.json())

  const response = await createUser.json()

  expect(response.name).toBe("Mohan")
  expect(response.job).toBe("student")

  console.log(response.id)
  console.log(response.createdAt)

});


test('PUT API', async ({ request }) => {

  const updateuser = await request.put(`https://reqres.in/api/users/2`,
    {
      headers: { "x-api-key": "reqres-free-v1" },
      data: {
        "name": "raju123",
        "job": "trainer"
      }
    });
  expect(updateuser.ok()).toBeTruthy();
  expect(updateuser.status()).toBe(200);
  console.log(await updateuser.json())

  const response = await updateuser.json()

  expect(response.name).toBe("raju123")
  expect(response.job).toBe("trainer")

  console.log(response.updatedAt)

});

test('DELETE API', async ({ request }) => {

  const deleteuser = await request.delete(`https://reqres.in/api/users/2`,
    {
      headers: { "x-api-key": "reqres-free-v1" }
    }
  );
  expect(deleteuser.ok()).toBeTruthy();
  expect(deleteuser.status()).toBe(204);

});



//Real time project APIS  - Modified 


test('Playwright Test Case - Understanding GET Method', async ({ request }) => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC';

  const headers = {
    "Cookie": "orangehrm=pah6mrg3fbj85lda2ouitm8dsf"
  };

  const response = await request.get(url, { headers });

  // Verify status code
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody)

  // Log the response body to the console
  console.log(responseBody);

  // Ensure the directory exists
  const dir = "apiresponses";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Create directory recursively
  }

  // Write the response body to a file
  fs.writeFileSync("apiresponses/AllEmployees.txt", JSON.stringify(responseBody, null, 2));
});


test('Playwright Test Case - Understanding DELETE Method', async ({ request }) => {
  const url = '/web/index.php/api/v2/pim/employees';

  const headers = {
    "Cookie": process.env.COOKIEVALUE,
    "Host": "opensource-demo.orangehrmlive.com",
    "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
  };

  // Define the payload for the DELETE request
  const payload = { "ids": [155] };

  // Send the DELETE request with headers and the payload
  const response = await request.delete(url, { headers, data: payload });

  // Assert that the response status is 200
  expect(response.status()).toBe(200);

  // Parse the response body as JSON
  const responseBody = await response.json();

  // Log the response body to the console
  console.log(responseBody);

});


test("verify create employee API", async ({ request }) => {

  const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"

  const headers = {

    "Cookie": "orangehrm=hpchnaq63g9qi2t2jg9nlo4utk",
    "Origin": "https://opensource-demo.orangehrmlive.com",
    "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"

  }

  const payload = {

    "firstName": "nAGAlAKSHMI",
    "middleName": "",
    "lastName": "PH",
    "empPicture": null,
    "employeeId": "7654"
  }

  const createuser = await request.post(url, { headers, data: payload });

  // Verify status code
  expect(createuser.status()).toBe(200);

  const responseBody = await createuser.json();

  // Log the response body to the console
  console.log(responseBody);

})


test("verify Edit  employee API", async ({ request }) => {

  const url = "/web/index.php/api/v2/pim/employees/230/personal-details"

  const headers = {

    "Cookie": process.env.COOKIEVALUE,
    "Origin": "https://opensource-demo.orangehrmlive.com",
    "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/230"

  }

  const payload = editepdata

  const edituser = await request.put(url, { headers, data: payload });

  // Verify status code
  expect(edituser.status()).toBe(200);

  const responseBody = await edituser.json();

  // Log the response body to the console
  console.log(responseBody);

})