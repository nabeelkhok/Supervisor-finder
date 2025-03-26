// Array of supervisor objects
const supervisors = [
    { id: 1, name: "Dr. Alice", researchDomain: "Artificial Intelligence", availableSlots: 2, contactInfo: "alice@uni.edu" },
    { id: 2, name: "Dr. Bob", researchDomain: "Data Science", availableSlots: 0, contactInfo: "bob@uni.edu" },
    { id: 3, name: "Dr. Charlie", researchDomain: "Machine Learning", availableSlots: 3, contactInfo: "charlie@uni.edu" },
    { id: 4, name: "Dr. Diana", researchDomain: "Cybersecurity", availableSlots: 1, contactInfo: "diana@uni.edu" },
    { id: 5, name: "Dr. Eve", researchDomain: "Blockchain", availableSlots: 0, contactInfo: "eve@uni.edu" },
    { id: 6, name: "Dr. Frank", researchDomain: "Cloud Computing", availableSlots: 4, contactInfo: "frank@uni.edu" },
    { id: 7, name: "Dr. Grace", researchDomain: "Internet of Things", availableSlots: 2, contactInfo: "grace@uni.edu" },
    { id: 8, name: "Dr. Henry", researchDomain: "Software Engineering", availableSlots: 0, contactInfo: "henry@uni.edu" },
    { id: 9, name: "Dr. Irene", researchDomain: "Human-Computer Interaction", availableSlots: 1, contactInfo: "irene@uni.edu" },
    { id: 10, name: "Dr. Jack", researchDomain: "Artificial Intelligence", availableSlots: 3, contactInfo: "jack@uni.edu" }
  ];
  
  // Bookmarked supervisors array
  let bookmarkedSupervisors = [];
  
  // Function to display supervisors
  function displaySupervisors(supervisorsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Clear previous content
  
    supervisorsArray.forEach(supervisor => {
      const card = document.createElement("div");
      card.className = "bg-white p-6 rounded-lg shadow-md";
  
      card.innerHTML = `
        <h3 class="text-xl font-semibold mb-2">${supervisor.name}</h3>
        <p class="text-gray-600 mb-1"><strong>Research Domain:</strong> ${supervisor.researchDomain}</p>
        <p class="text-gray-600 mb-1"><strong>Available Slots:</strong> ${supervisor.availableSlots}</p>
        <p class="text-gray-600 mb-4"><strong>Contact:</strong> ${supervisor.contactInfo}</p>
        <button
          onclick="bookmarkSupervisor(${supervisor.id})"
          class="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Bookmark
        </button>
      `;
  
      container.appendChild(card);
    });
  }
  
  // Function to filter supervisors
  function filterSupervisors() {
    const searchTerm = document.getElementById("domain-search").value.toLowerCase();
    console.log("Search Term:", searchTerm); // Debugging: Check the search term
  
    const filtered = supervisors.filter(supervisor => {
      const matchesDomain = supervisor.researchDomain.toLowerCase().includes(searchTerm);
      const hasAvailableSlots = supervisor.availableSlots > 0;
      console.log(`Supervisor: ${supervisor.name}, Matches Domain: ${matchesDomain}, Has Available Slots: ${hasAvailableSlots}`); // Debugging: Check each supervisor's status
      return matchesDomain && hasAvailableSlots;
    });
  
    console.log("Filtered Supervisors:", filtered); // Debugging: Check the filtered results
    displaySupervisors(filtered, "supervisor-list");
  }
  
  // Function to bookmark a supervisor
  window.bookmarkSupervisor = function (id) {
    const supervisor = supervisors.find(s => s.id === id);
    if (!bookmarkedSupervisors.includes(supervisor)) {
      bookmarkedSupervisors.push(supervisor);
      displaySupervisors(bookmarkedSupervisors, "bookmarked-list");
    }
  };
  
  // Event listener for filter button
  document.getElementById("filter-button").addEventListener("click", filterSupervisors);
  
  // Initial display of all supervisors
  displaySupervisors(supervisors, "supervisor-list");