/*
* Author: Juniper McIntyre (https://junipermcintyre.net/)
* Date: 22 Jan 2018
* Purpose: Needed a script I could just pass an array of events to and get a timeline render back.
*/

/* Features!
* Provide JSON list of chronological events
* Have it rendered to an HTML timeline
* Events have titles, dates, and descriptions, and a link

/* Future Features!
* Click for modal with more text
* Add pictures to frame
*/

class Timeline {

    constructor(conf, events) {
        // Init properties
        this.id = null;
        this.events = null;
        this.timeline = null;
        this.start = null;
        this.end = null;

        // Set conf
        if (conf.hasOwnProperty("id"))
            this.id = conf.id;
        else
            throw "Must pass element ID to TimelineJS!";

        if (conf.hasOwnProperty("start"))
            this.start = conf.start;
        else
            throw "Must pass element start to TimelineJS!";

        if (conf.hasOwnProperty("end"))
            this.end = conf.end;
        else
            throw "Must pass element end to TimelineJS!";

        this.events = events.events;

        // Grab the ID'd element
        this.timeline = document.getElementById(this.id);

        // Render up some HTML
        this.buildTimeline();
    }

    buildTimeline() {
        // Build header
        var headerContainer = document.createElement('div');
        headerContainer.setAttribute("class", "timelineHeader");

        var headerTitle = document.createElement('h3');
        headerTitle.textContent = this.start;
        headerContainer.appendChild(headerTitle);
        this.timeline.appendChild(headerContainer);

        // Build body
        var bodyContainer = document.createElement('div');
        bodyContainer.setAttribute("class", "timelineBody");
        this.timeline.appendChild(bodyContainer);

        // Loop over events
        for (var i = 0; i < this.events.length; i++) {
            var eventNode = this.buildEventBox(this.events[i]);
            bodyContainer.appendChild(eventNode);
        }

        // Build footer
        var footerContainer = document.createElement('div');
        footerContainer .setAttribute("class", "timelineFooter");

        var footerTitle = document.createElement('h3');
        footerTitle.textContent = this.end;
        footerContainer.appendChild(footerTitle);
        this.timeline.appendChild(footerContainer);
    }

    buildEventBox(ev) {
        var eventNode = document.createElement('div');              // Outer div (timelineEvent)
        eventNode.setAttribute("class", "timelineEvent");

        var textContainer = document.createElement('div');          // Inner div (child of timelineEvent) (timelineEventContainer)
        textContainer.setAttribute("class", "timelineEventContent");

        var title = document.createElement('h4');                   // Header in inner div
        title.setAttribute("class", "timelineTitle");

        var link = document.createElement('a');                     // Link in header
        link.setAttribute("href", ev.link);
        link.textContent = ev.title;

        var date = document.createElement('small');                 // Date in header
        date.textContent = ev.date;

        var desc = document.createElement('p');                     // Desc in inner div
        desc.setAttribute('class', 'timelineDesc');
        desc.textContent = ev.desc;

        // Assemble!
        eventNode.appendChild(textContainer);
        textContainer.appendChild(title);
        title.appendChild(link);
        title.appendChild(date);
        textContainer.appendChild(desc);

        // Return!
        return eventNode;
    }
}
