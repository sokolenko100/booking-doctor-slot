`Mobile Exercise`
The goal is to create a small application for doctors with the list of available slots for each day, we’ll call it `Agenda view`.
The view consists of a list which is split into days of the week and each day includes all the slots (available times for patients to book) for this day. `Doctors` can navigate to the next or previous week, but they shouldn’t be able to navigate to the past.
Each slot can be booked for an appointment for a patient by clicking at the slot and navigating to the new page. After completing the booking process, doctors go back to the slots list.
Previews:
https://monosnap.com/file/dac1OUqXmVpzELYn5wAAuEpluve6AB https://monosnap.com/file/03DafX72kfBFBfD263YqyfFytn1vCk
Additional info:
To get the list of the slots, you need to make API call:
GET https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/{ yyyyMMdd }
{yyyyMMdd} should always be Monday


Booking the slot will not make any api call, only update the list of the slots Nice to have:

● After refreshing the app, the list will have the booked slots remembered
● Documentation about the solution and decisions
● Tests
