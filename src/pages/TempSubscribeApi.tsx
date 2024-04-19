// mailchimp api doc url: https://mailchimp.com/developer/marketing/api/list-merges/

// API KEY: bc1325acf9e6476abe50e551c270138c-us10

// install mailchimp: npm install @mailchimp/mailchimp_marketing

// YOUR_SERVER_PREFIX: us10 (see: https://mailchimp.com/developer/marketing/guides/quick-start/)

// Default list id: abdcbd2c20

// HTML request to get all subscribed members :https://us10.api.mailchimp.com/3.0/lists/abdcbd2c20/members/?fields=members.full_name,members.email_address&exclude_fields&offset=0&type=%3CSOME_STRING_VALUE%3E&required=%3CSOME_BOOLEAN_VALUE%3E


/*const client = require("@mailchimp/mailchimp_marketing");

client.setConfig({
  apiKey: "YOUR_API_KEY",
  server: "YOUR_SERVER_PREFIX",
});

const run = async () => {
  const response = await client.lists.addListMember("list_id", {
    email_address: "Ebony_Brekke@gmail.com",
    status: "pending",
  });
  console.log(response);
};

run();

*/