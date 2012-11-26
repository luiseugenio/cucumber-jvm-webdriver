$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027br/treinamento/helloworld/helloworld.feature\u0027");
formatter.feature({
  "id": "hello-world",
  "description": "",
  "name": "Hello World",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "hello-world;say-hello",
  "description": "",
  "name": "Say hello",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I have a hello app with \"Howdy\"",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I ask it to say hi",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "it should answer with \"Howdy World\"",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "arguments": [
    {
      "val": "Howdy",
      "offset": 25
    }
  ],
  "location": "HelloStepdefs.I_have_a_hello_app_with(String)"
});
formatter.result({
  "duration": 126043704,
  "status": "passed"
});
formatter.match({
  "location": "HelloStepdefs.I_ask_it_to_say_hi()"
});
formatter.result({
  "duration": 29308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Howdy World",
      "offset": 23
    }
  ],
  "location": "HelloStepdefs.it_should_answer_with(String)"
});
formatter.result({
  "duration": 2201425,
  "status": "passed"
});
});