// Listeners
$(document).ready(function() {
  $('#fortune-form input[type="button"]').click(function() {
    processLoveFortune($('#fortune-form').serializeArray())
  })
})

function processLoveFortune(d) {
  var data = {};
  d.forEach(function(entry) {
    data[entry.name] = entry.value;
  })
  data.birthdate = new Date(data.birthdate.split("-").splice(1).join(" "))
  data.zodiac = getZodiac(data.birthdate);
  // $("#fortune-form .zodiac-img").append("<img src='images/zodiac_signs/" + data.zodiac.name + ".webp'>")
  $("#fortune-form .zodiac-img").text(data.zodiac.name);
  console.log(data);
}

function getZodiac(date) {
  var zodiac;
  Object.keys(StarSigns).forEach(function(key) {
    if (date >= StarSigns[key].start_date && date <= StarSigns[key].end_date) {
      zodiac = StarSigns[key];
      return;
    }
  })
  return zodiac;
}

var StarSigns = {
  Aries: {name: "Aries", start_date: new Date("03 21"), end_date: new Date("04 19")},
  Taurus: {name: "Taurus", start_date: new Date("04 20"), end_date: new Date("05 20")},
  Gemini: {name: "Gemini", start_date: new Date("05 21"), end_date: new Date("06 20")},
  Cancer: {name: "Cancer", start_date: new Date("06 21"), end_date: new Date("07 22")},
  Leo: {name: "Leo", start_date: new Date("07 23"), end_date: new Date("08 22")},
  Virgo: {name: "Virgo", start_date: new Date("08 23"), end_date: new Date("09 22")},
  Libra: {name: "Libra", start_date: new Date("09 23"), end_date: new Date("10 22")},
  Scorpio: {name: "Scorpio", start_date: new Date("10 23"), end_date: new Date("11 21")},
  Sagittarius: {name: "Sagittarius", start_date: new Date("11 22"), end_date: new Date("12 21")},
  Capricorn: {name: "Capricorn", start_date: new Date("12 22"), end_date: new Date("01 19")},
  Aquarius: {name: "Aquarius", start_date: new Date("01 20"), end_date: new Date("02 18")},
  Pisces: {name: "Pisces", start_date: new Date("02 19"), end_date: new Date("03 20")}
}
