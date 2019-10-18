const list = [
  {
    name: "Victoria Bergquist",
    avatarUrl: "https://avatars0.githubusercontent.com/u/25737281?s=400&v=4",
    twitterUrl: "https://twitter.com/vicbergquist",
    githubUrl: "https://github.com/vicbergquist",
    topics: "Vue.js, CSS, Diversity, Communities",
    company: "https://www.sanity.io",
    location: "Oslo, Norway",
    additionalText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu nisl nibh. Aenean vel sapien scelerisque, dictum mi id, porta nunc."
  },
  {
    name: "Limor 'Ladyada' Fried",
    avatarUrl: "https://avatars3.githubusercontent.com/u/1214161?s=400&v=4",
    twitterUrl: "https://twitter.com/adafruit",
    githubUrl: "https://github.com/ladyada",
    topics: "Open Source Hardware, Adafruit, MintyBoost, Diversity",
    company: "https://www.adafruit.com/",
    location: "USA",
    additionalText:
      "American electrical engineer and owner of the electronics hobbyist company Adafruit Industries."
  },
  {
    name: "Saloni Garg",
    avatarUrl: "https://avatars2.githubusercontent.com/u/26901250?s=400&v=4",
    twitterUrl: "https://twitter.com/salonigarg_",
    githubUrl: "https://github.com/saloni-garg",
    topics: "Phython, Mentoring, Community, Mozilla Open Source Leader",
    company: "Software Engineering Intern at Red Hat",
    location: "India",
    additionalText:
      "20-year-old Programmer. Mentors young students, encourages them to join the open source community."
  },
  {
    name: "Alicia Gibb",
    avatarUrl: "https://avatars2.githubusercontent.com/u/74891?s=400&v=4",
    twitterUrl: "https://twitter.com/pipix",
    githubUrl: "https://github.com/pipix",
    topics: "Open Source Hardware, researcher, hardware hacker",
    company: "http://lunchboxelectronics.com/",
    location: "Colorado, USA",
    additionalText:
      "Founder and CEO of Lunchbox Electronics, a company that creates innovative new products with Imagination and the passion for open source hardware. She conducted a successful Kickstarter called Build Upons for light up LEGO-compatible bricks."
  }
];

(function() {
  const renderItem = (template, node) => {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerHTML = template;
    node.appendChild(li);
  };

  const listItemTemplate = item =>
    `<div class="details">
        <div class="avatar">
          <img
            src="${item.avatarUrl}"
          />
        </div>
        <div class="content">
          <h2>
            ${item.name}
          </h2>
          <div class="icons">
            <a
              class="icon"
              href="${item.twitterUrl}"
              target="_blank"
            >
              <img src="images/twitter.png" />
            </a>
            <a
              class="icon"
              href="${item.githubUrl}"
              target="_blank"
            >
              <img src="images/github.png" />
            </a>
          </div>
          <p>
            Topics: ${item.topics}
          </p>
          <p>Company: ${item.company}</p>
          <p>Location: ${item.location}</p>
        </div>
      </div>
      <p>
        >>${item.additionalText}
      </p>

      <div class="divider"></div>
  `;

  list.map(item => {
    const template = listItemTemplate(item);
    renderItem(template, document.querySelector("#list"));
  });
})();
