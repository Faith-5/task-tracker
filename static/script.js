const API = "http://127.0.0.1:8000";

async function fetchTasks() {
    const res = await fetch(`${API}/tasks`);
    const tasks = await res.json();

    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span style="text-decoration:${task.completed ? 'line-through' : 'none'}">
                ${task.title}
            </span>
            <div>
                <button onclick="toggleTask(${task.id})">✔</button>
                <button onclick="deleteTask(${task.id})">🗑</button>
            </div>
        `;
        list.appendChild(li);
    });
}

async function addTask() {
    const input = document.getElementById("taskInput");
    await fetch(`${API}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: input.value })
    });
    input.value = "";
    fetchTasks();
}

async function toggleTask(id) {
    await fetch(`${API}/tasks/${id}`, { method: "PUT" });
    fetchTasks();
}

async function deleteTask(id) {
    await fetch(`${API}/tasks/${id}`, { method: "DELETE" });
    fetchTasks();
}

fetchTasks();
