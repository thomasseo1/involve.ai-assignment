//function that calls the openai api to generate the email for setting up a meeting
const generate = async (name, email, date) => {
  const prompt = `Generate an email about setting up a zoom meeting with ${name} on ${date} to this ${email}. Make sure not include any unnecessary things like where to meet, what will be happening during the meeting. Only make it about scheduling up a zoom meeting.`;

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer add_you_openai_api_key_here`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    }),
  });

  const data = await response.json();
  const answer = data.choices[0].text.trim();
  return answer;
};

export default generate;
