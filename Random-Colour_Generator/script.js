function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return {
      r: r,
      g: g,
      b: b
    };
  }

 
  for (let i = 0; i < 8; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
  }

  const btn = document.querySelector('.btn');
  btn.addEventListener('click', function() {
    addColor();
  });

  const randomColorBlock = document.querySelectorAll('.box');

  function randomHexColorCode() {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for (var i = 0; i < colorLength; i++) {
      var randomColor = Math.floor(Math.random() * chars.length);
      color += chars.substring(randomColor, randomColor + 1);
    }

    return '#' + color;
  }

  function addColor() {
    randomColorBlock.forEach(e => {
        var newColor = randomHexColorCode();
        e.style.backgroundColor = newColor;

        var rgbColor = hexToRgb(newColor);
        var hexValue = newColor;
        var rgbValue = `RGB: (${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`;
        
        
        e.innerHTML = `
            <div class="color-info">
                <div class="hex">${hexValue}</div>
                <div class="rgb">${rgbValue}</div>
            </div>
        `;
    });
  }