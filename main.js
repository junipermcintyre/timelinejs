/*
* Author: Juniper McIntyre (https://junipermcintyre.net/)
* Date: 23 Jan 2018
* Purpose: Run the timeline script
*/

var events = {
    "events": [
        {
            "title": "January",
            "date": "Jan 2018",
            "link": "https://google.ca/",
            "desc": "January is the first month of the year."
        },
        {
            "title": "February",
            "date": "Feb 2018",
            "link": "https://google.ca/",
            "desc": "February is the second month of the year."
        },
        {
            "title": "March",
            "date": "Mar 2018",
            "link": "https://google.ca/",
            "desc": "March is the third month of the year."
        },
        {
            "title": "April",
            "date": "Apr 2018",
            "link": "https://google.ca/",
            "desc": "April is the fourth month of the year."
        }
    ]
};

var conf = {
    "id": "myTimeline",
    "start": "January 1st, 2018",
    "end": "December 31st, 2019"
}

var timeline = new Timeline(conf, events);
