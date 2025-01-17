const customLetters = {
  'J1': [
    "      ██╗",
    "      ██║",
    "      ██║",
    " ██   ██║",
    " ╚█████╔╝",
    "  ╚════╝ ",
  ],
  'A1': [
    "  █████╗ ",
    " ██╔══██╗",
    " ███████║",
    " ██╔══██║",
    " ██║  ██║",
    " ╚═╝  ╚═╝",
  ],
  'Y1': [
    " ██╗   ██╗",
    " ╚██╗ ██╔╝",
    "  ╚████╔╝ ",
    "   ╚██╔╝  ",
    "    ██║   ",
    "    ╚═╝   ",
  ],
  'E1': [
    " ███████╗",
    " ██╔════╝",
    " █████╗  ",
    " ██╔══╝  ",
    " ███████╗",
    " ╚══════╝",
  ],
  'S1': [
    "  ██████╗",
    " ██╔════╝",
    " ╚█████╗ ",
    "  ╚═══██╗",
    " ██████╔╝",
    " ╚═════╝ ",
  ],
  'H1': [
    " ██╗  ██╗",
    " ██║  ██║",
    " ███████║",
    " ██╔══██║",
    " ██║  ██║",
    " ╚═╝  ╚═╝",
  ],
  'G1': [
    "  ██████╗ ",
    " ██╔════╝ ",
    " ██║  ███╗",
    " ██║   ██║",
    " ╚██████╔╝",
    "  ╚═════╝ ",
  ],
  'A2': [
    "  █████╗ ",
    " ██╔══██╗",
    " ███████║",
    " ██╔══██║",
    " ██║  ██║",
    " ╚═╝  ╚═╝",
  ],
  'B1': [
    " ██████╗ ",
    " ██╔══██╗",
    " ██████╔╝",
    " ██╔══██╗",
    " ██████╔╝",
    " ╚═════╝ ",
  ],
  'A3': [
    "  █████╗ ",
    " ██╔══██╗",
    " ███████║",
    " ██╔══██║",
    " ██║  ██║",
    " ╚═╝  ╚═╝",
  ],
};

const nameMapping = {
  'JAYESH': ['J1', 'A1', 'Y1', 'E1', 'S1', 'H1'],
  'GABA': ['G1', 'A2', 'B1', 'A3']
};

export function figletText(text = 'JAYESH GABA') {
  const [firstName = 'JAYESH', lastName = 'GABA'] = text.split(' ');
  
  const createLine = (word) => {
    let result = new Array(6).fill('');
    const mapping = nameMapping[word] || [];
    
    for (let i = 0; i < mapping.length; i++) {
      const letterKey = mapping[i];
      const customChar = customLetters[letterKey];
      for (let line = 0; line < 6; line++) {
        result[line] += customChar[line];
      }
    }
    return result;
  };

  const firstLine = createLine(firstName);
  const secondLine = createLine(lastName);
  
  return [...firstLine, '', ...secondLine].join('\n');
}