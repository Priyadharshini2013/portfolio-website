// script.js

// Load all content from external JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    renderProjects(data.projects);
    renderCourses(data.courses);
    renderDailyUpdates(data.dailyUpdates);
  })
  .catch(error => {
    console.error("Error loading data:", error);
  });

function renderProjects(projects) {
  const container = document.getElementById("project-list");
  container.innerHTML = "";
  projects.forEach(proj => {
    const div = document.createElement("div");
    div.classList.add("project");
    div.innerHTML = `
      <h3>${proj.name}</h3>
      <p>${proj.description}</p>
      <div class="progress-bar">
        <div style="width:${proj.progress}%">${proj.progress}%</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderCourses(courses) {
  const container = document.getElementById("course-list");
  container.innerHTML = "";
  courses.forEach(course => {
    const div = document.createElement("div");
    div.classList.add("course");
    div.innerHTML = `
      <h3>${course.title}</h3>
      <div class="progress-bar">
        <div style="width:${course.progress}%">${course.progress}%</div>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderDailyUpdates(updates) {
  const container = document.getElementById("daily-updates");
  container.innerHTML = "";
  updates.forEach(update => {
    const div = document.createElement("div");
    div.classList.add("update");
    div.innerHTML = `
      <h3>${update.date}</h3>
      <p><strong>Update:</strong> ${update.update}</p>
      <p><strong>Analysis:</strong> ${update.analysis}</p>
    `;
    container.appendChild(div);
  });
}