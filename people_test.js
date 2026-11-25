Feature('people');

Scenario('Validar request people',  ({ I }) => {
    I.setRequestTimeout(20000)
    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['count', 'results'])
});

Scenario('Validar request people 1',  ({ I }) => {
    I.setRequestTimeout(20000)
    I.sendGetRequest('/people/1')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['name', 'height'])
    I.seeResponseContainsJson({
        name: 'Luke Skywalker',
        birth_year: '19BBY',
        gender: 'male',
    })
});

Scenario('Validar request de pessoa inexistente', ({ I }) => {
    I.setRequestTimeout(20000)
    I.sendGetRequest('/people/9999')
    I.seeResponseCodeIs(404)
});
