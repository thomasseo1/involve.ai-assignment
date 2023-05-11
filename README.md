# MeetQuickly

MeetQuickly is an AI google chrome extension that enables users to instantly generate an email about scheduling a Zoom meeting.

## Description
The singular purpose of this chrome extension is to generate an email to schedule a Zoom meeting with a friend, colleague, or anyone. I thought having an extension such as this would be very useful for someone in sales, marketing, customer service teams, or just any working person because there are usually tons of meetings to schedule or attend. Having an extension that can create meetings in a short amount of time would definitely save time and money. The extension itself is very simple but I wanted to demonstrate my knowledge of relevant technologies such as using the OpenAI api, which is widely used by many companies and even involve.ai itself. 

## Installation

Clone the repository to an empty folder.

Open up your terminal to download all the necessary dependencies by typing in:

```bash
npm install
```

  * Go to [OpenAI](openai.com) to create an api key to access their api.

  * Replace the text after Bearer in the authorization section of the generate.js file with your actualy OpenAI api key.

Go back into the terminal and type in:
```bash
npm run build
```

This will allow Google Chrome to access the manifest.json file that is needed to run the extension on the browser.



## Usage
  * To access the google chrome extension in your browser make sure to enter this into the address bar **chrome://extensions**.
  * On the top right of the browser make sure to turn on the Developer mode.
  * On the left click on the Load unpacked button.
  * A popup will appear telling you to select the extension directory. 
    * What you need to do here is locate the folder that you cloned this repository to then go into the folder and make sure to select the build folder.
  * **_VOILA_** your very own google chrome extension will appear.
  * Make sure to click on the puzzle piece icon located on the top right of your browser and pin the MeetQuickly extension so you can use it anytime!


## Notes
  * With extra time I would have made the extension a lot prettier, created tests, and another feature that would send the generated email directly to the person you are scheduling the meeting with.
