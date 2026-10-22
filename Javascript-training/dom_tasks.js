//task1 change page heading by using id
document.getElementById("uthra").innerHTML="Upcoming Campus Events";
//task2 Select all .event-card elements and add a highlight class to each.
const card = document.querySelectorAll(".event-card");
for (i of card)
{
i.classList.add("highlight");
}

//task 3 Read a name from an input using value and display it in a paragraph using textContent.
let val=document.getElementById("textbox");
document.getElementById("p").textContent=val.value;

//task 4 Create a card from an object containing title and date, then append it to #event-list.
const eventData = {
    title: "Annual Tech Symposium",
    date: "November 15, 2026"
};

const eventList = document.getElementById("event-list");

eventList.innerHTML += `
    <div class="event-card">
        <h3>${eventData.title}</h3>
        <p>Date: ${eventData.date}</p>
        
    </div>
`;
