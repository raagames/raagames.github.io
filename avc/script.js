const avatar = {
  hair: "short",
  eyes: "blue",
  outfit: "casual",
};

function updateAvatar(part, value) {
  avatar[part] = value;
  const element = document.querySelector(`.${part}`);
  element.className = `${part} ${value}`;
}

// Event listeners for customization
document.getElementById('hair-style').addEventListener('change', (e) => {
  updateAvatar('hair', e.target.value);
});

document.getElementById('eye-color').addEventListener('change', (e) => {
  updateAvatar('eyes', e.target.value);
});

document.getElementById('outfit').addEventListener('change', (e) => {
  updateAvatar('outfit', e.target.value);
});

// Save Avatar
document.getElementById('save-avatar').addEventListener('click', () => {
  alert(`Avatar saved! Details: ${JSON.stringify(avatar)}`);
});
