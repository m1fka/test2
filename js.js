const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const runner = document.querySelector('.on-off .runner');

headerOnOff.addEventListener('click', () => {
    On.classList.toggle('open_on-off');
    Off.classList.toggle('open_on-off');
    runner.classList.toggle('open_on-off');
})



////////

