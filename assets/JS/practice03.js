let day = prompt("Enter a day");

if (day == null) {
  console.log("Enter a day of the week");
} else {
  console.log("Valid Data");
  day = day.toLowerCase();

  if (
    day == "monday" ||
    day == "tuesday" ||
    day == "wednesday" ||
    day == "thursday" ||
    day == "fridary"
  ) {
    console.log("It's a day of the week");
  } else if (day == "saturday" || day == "sunday") {
    console.log("it's weekend");
  } else {
    console.log("Enter a day of the week");
  }
}
