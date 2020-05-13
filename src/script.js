document.addEventListener("click", (event) => {
  const links = document.getElementById("links");
  const icon = document.getElementById("icon");
  if (!links.classList.contains("hidden") && !icon.contains(event.target)) {
    links.classList.add("hidden");
  }
});

const toggleMenu = () => {
  const x = document.getElementById("links");
  if (x.classList.contains("hidden")) {
    x.classList.remove("hidden");
  } else {
    x.classList.add("hidden");
  }
};

const focusAttention = () => {
  const icons = document.querySelectorAll(".contact-ico");
  icons.forEach((icon) => icon.classList.add("fade"));
  setTimeout(
    () => icons.forEach((icon) => icon.classList.remove("fade")),
    1000
  );
  window.scrollTo(0, 0);
};

const scrollFocus = () => {
  setTimeout(() => focusAttention(), 1000);
};

const toggleSection = () => {
  const x = document.getElementById("additional-info");
  if (x.classList.contains("slideup")) {
    x.classList.remove("slideup");
    x.classList.add("slidedown");
    setTimeout(() => x.scrollIntoView(), 500);
  } else {
    x.classList.remove("slidedown");
    x.classList.add("slideup");
  }
};

// I know it shouldn't be here but it just has has some nostalgic value to me :)

// const date1 = new Date();
// const date2 = new Date('2020/04/17');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// let percent = Math.floor((81 - diffDays) / 81 * 100);

// const progress = document.querySelector('#progress-bar-inside');
// progress.style.width = `${percent}%`;

// const completed = document.querySelector('#completion');
// completed.textContent = `${percent}% course completed`;

// const incompleted = document.querySelector('#incompletion');
// incompleted.textContent = `${100 - percent}% to go`;
