# Commutron Time (project barnacle)

An alarm clock utility. Syncs time the host server and shows notifications on a recurring schedule of times.

The goal is to get every client to share the same time even if the desktop time is inccorrect.

The time is not accurate to the millisecond as it is not compensating for the API call delay.
Even on a poor connection the round trip is negligible so more accuracy is not deemed worth while at this time.

If the server API is unavailable, it will continue to work but off of the local computer time.


config.json

````
  // Display 24 hour time
  "twentyfour" : false,
  
  // Default state of volume toggle
  "noise" : false,

  // Recuring alarm times for a week. 0 = Sunday.
  // Must be in 24 hour time with leading zeros.
  "week" : {
      "0": [],
      "1": ["09:15", "11:45", "14:15", "16:30"],
      "2": ["09:15", "11:45", "14:15", "16:30"],
      "3": ["09:15", "11:45", "14:15", "16:30"],
      "4": ["09:15", "11:45", "14:15", "16:30"],
      "5": ["09:15", "12:00"],
      "6": []
    },

  // How often to get a server time offset in milliseconds
  "sync" : 3600000, (1 hour)

  // How soon to show the next Alarm in minutes
  "prewarn" : 5,

  // How long to show the alarm indicator in minutes
  "lightup" : 1
}

````

## Technical

Commutron Time is constituted of two parts. A webpage built with react-static and a Netlify "serverless" Lambda function. Its requirements are well below the current limits of the free tier. If 30 computers run Commutron Time 24/7 for 31 days they would make 22,000 lambda requests, the current monthly free tier limit is 125,000. If free-tier limits are reached then the services will stop. No charges will be incurred if no payment method is attached to the Netlify account. 

The website is public but the Lambda function is private and can not be accessed by any other source. If it was moved to a new host, a new Lambda provider would be required for the server time sync component to function. Without a functioning Lambda function the rest of the clock will work correctly but it will use the local computers time.

This GitHub repository commutron/commutron-time at https://github.com/commutron/commutron-time is configured with Netlify continuous integration (aka CI). This means that changes to this repository will automatically trigger an update on Netlify.
This allows for changing the configuration without having to rebuild the site. Changing config.json can set the weekly alert schedule as well as other view options. The config.json can be edited directly in GitHub but it must be valid JSON. If you are unfamiliar with this, verify your changes with an online checker like JSON Lint (https://jsonlint.com/) before saving. The alert noises can be changed if the WAV file is replaced with another WAV file of the exact same name.

The two bell noises are free and royalty-free files from Joseph Sardin at https://bigsoundbank.com/.
The sound is set to OFF by default because of a bad actor browser mitigation. At this time, before the browser is allowed to play audio there must be a first user interaction after page load. A click of the icon satisfies this requirement.

The source project repository is commutron/barnacle at https://github.com/commutron/barnacle. Initially built with react-static release 7.5.0.
