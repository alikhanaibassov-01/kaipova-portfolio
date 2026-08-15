// Аккордеон разделов программы
document.querySelectorAll('.module__btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var module = btn.closest('.module');
    var open = module.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
  });
});
