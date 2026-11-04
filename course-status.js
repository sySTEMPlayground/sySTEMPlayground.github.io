(() => {
  const today = new Date();
  const isRunningSeason = today.getMonth() >= 9 && today.getMonth() <= 11;

  if (!isRunningSeason) {
    return;
  }

  document.querySelectorAll('[data-currently-running]').forEach((course) => {
    course.classList.add('course-row--running');

    const badge = document.createElement('span');
    badge.className = 'course-running-badge';
    badge.textContent = 'Currently running';
    course.append(badge);
  });
})();
