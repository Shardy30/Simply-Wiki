//create an api call of next js
export default async function handler(req, res) {
  const response = {
    title: "Hello World",
    description: process.env.TESTING,
  };
  res.status(200).send(response);
}
