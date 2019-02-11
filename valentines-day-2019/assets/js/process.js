// Form Listeners
$(document).ready(function() {
  // Fortune Form
  $('#fortune-form input[name="birthdate"]').change(function() {
    $("#fortune-form .zodiac-img").text(getZodiac(new Date($(this).val().split("-").splice(1).join(" "))).name);
  })

  $('#fortune-form input[type="button"]').click(function(e) {
    $('#fortune-form input').each(function(i, input) {
      if (!$(input).val() || $(input).val().trim().length == 0) {
        alert('Please fill out all fields!');
        throw new Error("Field not filled. Cannot proceed to submit because not all fields are filled.", "Cannot proceed to submit because fields are not filled.");
      }
    })
    processLoveFortune($('#fortune-form').serializeArray())
    $(this).closest('form').find("input:not(input[type='button'])").val("");
    $(this).closest('form').find(".zodiac-img").text("");
  })

  // Test Form One
  $('#test-form-one input[name="birthdate"]').change(function() {
    $("#test-form-one .zodiac-img").text(getZodiac(new Date($(this).val().split("-").splice(1).join(" "))).name);
  })

  $('#test-form-one input[type="button"]').click(function(e) {
    $('#test-form-one input').each(function(i, input) {
      if (!$(input).val() || $(input).val().trim().length == 0) {
        alert('Please fill out all fields!');
        throw new Error("Field not filled. Cannot proceed to submit because not all fields are filled.", "Cannot proceed to submit because fields are not filled.");
      }
    })
    processTestOne($('#test-form-one').serializeArray())
  })

  // Test Form Two
  $('#test-form-two input[name="birthdate"]').change(function() {
    $("#test-form-one .zodiac-img").text(getZodiac(new Date($(this).val().split("-").splice(1).join(" "))).name);
  })

  $('#test-form-two input[type="button"]').click(function(e) {
    $('#test-form-two input').each(function(i, input) {
      if (!$(input).val() || $(input).val().trim().length == 0) {
        alert('Please fill out all fields!');
        throw new Error("Field not filled. Cannot proceed to submit because not all fields are filled.", "Cannot proceed to submit because fields are not filled.");
      }
    })
    processTestTwo($('#test-form-two').serializeArray())
  })

  // Test Form

  // Match Form
  $('#match-form input[name="birthdate"]').change(function() {
    $("#match-form .zodiac-img").text(getZodiac(new Date($(this).val().split("-").splice(1).join(" "))).name);
  })

  $('#match-form input[type="button"]').click(function(e) {
    $('#match-form input').each(function(i, input) {
      if (!$(input).val() || $(input).val().trim().length == 0) {
        alert('Please fill out all fields!');
        throw new Error("Field not filled. Cannot proceed to submit because not all fields are filled.", "Cannot proceed to submit because fields are not filled.");
      }
    })
    processMatch($('#match-form').serializeArray())
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
  var forecast =
    "<p><b>Your Birthday:</b> " + data.birthdate + "</p>" +
    "<p><b>Your Zodiac Sign:</b> " + data.zodiac.name + "</p>" +
    "<p><b>Your Personality:</b> " + data.zodiac.personality + "</p>" +
    "<p><b>Love Advice:</b> " + data.zodiac.horoscope + "</p>" +
    "<p><b>Most Compatible Signs:</b> " + data.zodiac.compatible + "</p>";
  createModal({title: data['first-name'] + " " + data['last-name'], message: forecast});
}

function processTestOne(d) {
  var data = {};
  d.forEach(function(entry) {
    data[entry.name] = entry.value;
  })
  data.birthdate = new Date(data.birthdate.split("-").splice(1).join(" "))
  data.zodiac = getZodiac(data.birthdate);
  // $("#fortune-form .zodiac-img").append("<img src='images/zodiac_signs/" + data.zodiac.name + ".webp'>")
}

function processTestTwo(d) {
  var data = {};
  d.forEach(function(entry) {
    data[entry.name] = entry.value;
  })
  data.birthdate = new Date(data.birthdate.split("-").splice(1).join(" "))
  data.zodiac = getZodiac(data.birthdate);
  // $("#fortune-form .zodiac-img").append("<img src='images/zodiac_signs/" + data.zodiac.name + ".webp'>")
}

function processMatch(d) {
  var data = {};
  d.forEach(function(entry) {
    data[entry.name] = entry.value;
  })
  data.birthdate = new Date(data.birthdate.split("-").splice(1).join(" "))
  data.zodiac = getZodiac(data.birthdate);
  // $("#fortune-form .zodiac-img").append("<img src='images/zodiac_signs/" + data.zodiac.name + ".webp'>")
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
  Aries: {name: "Aries", start_date: new Date("03 21"), end_date: new Date("04 19"),
    personality: "You love to be number one. You are bold and ambitious. You are passionate and temperamental, so you get angry quickly, but you forgive easily. You love to challenge yourself.",
    horoscope: "A powerful passionate momentum is slowly building. Your fascinating personality is blossoming in the eyes of the one you love. Robust of spirit, born of fiery determination, you are eager to set yourself free - to let all your emotions out to the one you love.",
    compatible: "Aquarius, Sagittarius, Leo, and Gemini"
  },
  Taurus: {name: "Taurus", start_date: new Date("04 20"), end_date: new Date("05 20"),
    personality: "You enjoy relaxing in serene, bucolic environments, surrounded by soft sounds, soothing aromas, and succulent flavors. You are sensitive to the emotions of others, but you are afraid to let your own emotions out. You are ambitious, focused, and resilient, willing to work hard to earn big rewards.",
    horoscope: "You are absolutely loyal to the one you love, so you do not want to harm or disturb them in any way. You think that it is more secure not to confess your feelings, and you are stubborn enough to be quiet about your crush for a long period of time. You are determined to be with the one you love, but if you do not confess now, you may not feel the confidence to confess in the future.",
    compatible: "Virgo and Pisces"
  },
  Gemini: {name: "Gemini", start_date: new Date("05 21"), end_date: new Date("06 20"),
    personality: "You are anxious about everything - about academics, your friends, and even the smallest things in you life. You like to explore many different things and socialize with different people. You are playful, honest, and outgoing.",
    horoscope: "You are naturally restless, so it is difficult for you to hide your feelings towards the one you love. It is good to have the confidence to confess your feelings, but be cautious about the way you confess. Being too playful may undermine your success in pursuing the one you love.",
    compatible: "Aquarius and Libra"
  },
  Cancer: {name: "Cancer", start_date: new Date("06 21"), end_date: new Date("07 22"),
    personality: "You are highly intuitive - so much so that it seems like you have psychic abilities. You are not only sensitive to other people's emotions, but also protective of your own. You express a gentle nature, genuine compassion, and mystical capabilities.",
    horoscope: "Your gentle nature naturally attracts those around you. However, don't mistaken this attraction as romantic. Be careful as you draw a distinction between romantic love and friendship, because you may be easily friendzoned.",
    compatible: "Scorpio and Pisces"
  },
  Leo: {name: "Leo", start_date: new Date("07 23"), end_date: new Date("08 22"),
    personality: "Congratulations! You have found the first Easter Egg! Did you know? The creator of this website, Leo, is actually a Leo!",
    horoscope: "Love Leo. Be Leo.",
    compatible: "Leo"
  },
  Virgo: {name: "Virgo", start_date: new Date("08 23"), end_date: new Date("09 22"),
    personality: "You are a very logical, practical, and systematic person. You are a perfectionist at heart and aren't afraid to improve skills through diligent and consistent practice. You are hyper-aware of every detail, and act as the calm, rational figure in a group.",
    horoscope: "Your kind and supportive nature makes you a likeable and approachable person. Treat the person you love especially kindly today, and you may get something back from it. Don't let your boring, rational self show this Valentine's Day.",
    compatible: "Taurus and Capricorn"
  },
  Libra: {name: "Libra", start_date: new Date("09 23"), end_date: new Date("10 22"),
    personality: "You are very fixated on balance and harmony. You are obsessed with symmetry and strives to create equilibrium in all areas of life, including academics and romance. You highly value art, intellectualism, and connoisseurship. Because of this, you are naturally an excellent designer, decorator, art critic, and stylist.",
    horoscope: "Your focus on balance has you hesitating in being more involved in a romantic relationship. Take this opportunity to take a different approach in life - try putting more of your time into romance. If you do so, your sense of balance and aesthetics will help you appeal to the one you love.",
    compatible: "Leo and Sagittarius"
  },
  Scorpio: {name: "Scorpio", start_date: new Date("10 23"), end_date: new Date("11 21"),
    personality: "You are a very emotional person on the inside, but you want to look strong to the ones around you. Nonetheless, your passion and emotional power is unrivaled. You may feel lonely, because you constantly crave physical closeness, spiritual illumination, and emotional intimacy.",
    horoscope: "You are at the pinnacle of loneliness, and you do not wish to be more engaged in romantic affairs because of your apparent emotional strength and passion in a certain field. If you look around you closely this Valentine's Day, you will find a person who loves you more than anything. Passion and power are your most attractive points, afterall.",
    compatible: "Leo, Scorpio, and Pisces"
  },
  Sagittarius: {name: "Sagittarius", start_date: new Date("11 22"), end_date: new Date("12 21"),
    personality: "You are always on a quest for knowledge, constantly seeking geographical, intellectual, and spiritual adventures. You are a good storyteller and articulate your thoughts very well. Because of this, you can have a great sense of humor, but also a very sharp tongue.",
    horoscope: "You are very interested in being in a romantic relationship, but your overt eagerness may instead alienate your potential chosen one. Take this time to calm down and see around you. Your intellect may find you a compatible mate, but your sharp tongue may chase them away.",
    compatbile: "Leo, Aries, Aquarius, and Libra"
  },
  Capricorn: {name: "Capricorn", start_date: new Date("12 22"), end_date: new Date("01 19"),
    personality: "You are skilled at navigating both the material and emotional realms. You are mischievous on the inside, but calm and keen on the outside. As you grow, you will become more and more youthful, optimistic, and playful.",
    horoscope: "Your serious apperance may alienate your loved one, but you are afraid that your true mischievous self would do the same. It is time to combine your inner optimism and confidence with your acute, intellectual appeal this Valentine. If you can do so successfully, the one you love will surely come to you.",
    compatible: "Pisces, Scorpio, Virgo, and Taurus"
  },
  Aquarius: {name: "Aquarius", start_date: new Date("01 20"), end_date: new Date("02 18"),
    personality: "You are a scholar of humanities who express great sympathy for the weak. You aspire to change the world through social progress, and apply the same philosophy to your day-to-day life. You have an offbeat sense of fashion and eccentric hobbies.",
    horoscope: "Your eccentricity is a double-edge sword, cutting away those who do not understand you and appealing to the interest of the curious ones. A sudden shift in your romantic relationship is expected, but if you try to conform instead of fight the change, maybe your romantic life will have a positive twist to it.",
    compatible: "Gemini and Libra"
  },
  Pisces: {name: "Pisces", start_date: new Date("02 19"), end_date: new Date("03 20"),
    personality: "You have absorbed every lesson - the joys and the pains and the hopes and the fears of life. Because of this, you are the most empathetic and compassionate out of all those around you. You get easily swallowed by emotions as a result, and often drift away from reality.",
    horoscope: "Your radiance and compassion will find you a comparably compassionate and gentle partner. Do as the heart tells you, because you have a sharp intuition for emotions. However, do not get overwhelmed by emotions this Valentine's Day.",
    compatible: "Scorpio and Cancer"
  }
}
