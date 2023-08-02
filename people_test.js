Feature('people');

Scenario('Validar request people',  ({ I }) => {
    I.sendGetRequest('/people')
    I.setRequestTimeout(20000)
    I.seeResponseCodeIsSuccessful()
});

Scenario('Validar request people 1',  ({ I }) => {
    I.sendGetRequest('/people/1')
    I.setRequestTimeout(20000)
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['name', 'height'])
    I.seeResponseContainsJson({
        name: 'Luke Skywalker',
        birth_year: '19BBY',
        gender: 'male',
    })
});
