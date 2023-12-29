/* reference: https://vi.wikipedia.org/wiki/Can_Chi

2. Mệnh Hỏa
1948, 1949, 2008, 2009: Tích Lịch Hỏa (Lửa sấm sét)
1956, 1957, 2016, 2017: Sơn hạ hỏa (Lửa dưới chân núi)
1964, 1965, 2024, 2025: Phú đăng hỏa (Lửa đèn dầu)
1978, 1979, 2038, 2039: Thiên thượng hỏa (Lửa trên trời)
1986, 1987, 2046, 2047: Lộ trung hỏa (Lửa trong lò)
1994, 1995, 2054, 2055, 1934, 1935: Sơn đầu hỏa (Lửa trên núi)

1. Mệnh Mộc
1950, 1951, 2010, 2011: Tùng bách mộc (Cây tùng bách)
1958, 1959, 2018, 2019: Bình địa mộc (Cây ở đồng bằng)
1972, 1973, 2032, 2033: Tang đố mộc (Gỗ cây dâu)
1980, 1981, 2040, 2041: Thạch lựu mộc (Cây thạch lựu)
1988, 1989, 2048, 2049: Đại lâm mộc (Cây trong rừng lớn)
2002, 2003, 2062, 2063, 1942, 1943: Dương liễu mộc (Cây dương liễu)

3. Mệnh Thổ
1960, 1961, 2020, 2021: Bích thượng thổ (Đất trên vách)
1968, 1969, 2028, 2029: Đại dịch thổ (Đất thuộc 1 khu lớn)
1976, 1977, 2036, 2037: Sa trung thổ (Đất lẫn trong cát)
1990, 1991, 2050, 2051, 1930, 1931: Lộ bàng thổ (Đất giữa đường)
1998, 1999, 2058, 2059, 1938, 1939: Thành đầu thổ (Đất trên thành)
2006, 2007, 2066, 2067, 1946, 1947: Ốc thượng thổ (Đất trên nóc nhà)

4. Mệnh Kim
1954, 1955, 2014, 2015: Sa trung kim (Vàng trong cát)
1962, 1963, 2022, 2023: Kim bạch kim (Vàng pha bạch kim)
1970, 1971, 2030, 2031: Thoa xuyến kim (Vàng trang sức)
1984, 1985, 2044, 2045: Hải trung kim (Vàng dưới biển)
1992, 1993, 2052, 2053, 1932, 1933: Kiếm phong kim (Vàng đầu mũi kiếm)
2000, 2001, 2060, 2061, 1940, 1941: Bạch lạp kim (Vàng trong nến rắn)

5. Mệnh Thủy
1952, 1953, 2012, 2013: Trường lưu thủy (Dòng nước lớn)
1966, 1967, 2026, 2027: Thiên hà thủy (Nước trên trời)
1974, 1975, 2034, 2035: Đại khê thủy (Nước dưới khe lớn)
1982, 1983, 2042, 2043: Đại hải thủy (Nước đại dương)
1996, 1997, 2056, 2057, 1936, 1937: Giản hạ thủy (Nước dưới khe)
2004, 2005, 2064, 2065, 1944, 1945: Tuyền trung thủy (Dưới giữa dòng suối)

*/

// Tính tuổi âm lịch 12 con giáp (can chi) dựa vào năm sinh
// - Thiên can: Giáp, Ất = 1; Bính, Đinh = 2; Mậu, Kỷ = 3; Canh, Tân = 4; Nhâm Quý = 5
// - Địa chi: Tý, Sửu, Ngọ, Mùi = 0; Dần, Mão, Thân, Dậu = 1; Thìn, Tỵ, Tuất, Hợi = 2
// Tính tổng hàng Can và hàng Chi để quy đổi ra Cung mệnh (tức Thiên can + Địa chi = Cung mệnh). Với Kim = 1, Thủy = 2, Hỏa = 3, Thổ = 4, Mộc = 5.


const thienCanMap = {
  1: ['Giáp', 'Ất'],
  2: ['Bính', 'Đinh'],
  3: ['Mậu', 'Kỷ'],
  4: ['Canh', 'Tân'],
  5: ['Nhâm', 'Quý'],
};

const diaChiMap = {
  0: ['Tý (Chuột)', 'Sửu (Trâu)', 'Ngọ (Ngựa)', 'Mùi (Dê)'],
  1: ['Dần (Cọp - Hổ)', 'Mão (Mèo)', 'Thân (Khỉ)', 'Dậu (Gà)'],
  2: ['Thìn (Rồng)', 'Tỵ (Rắn)', 'Tuất (Chó)', 'Hợi (Lợn)'],
};

// 10 can
const canNames = [
  'Canh',
  'Tân',
  'Nhâm',
  'Quý',
  'Giáp',
  'Ất',
  'Bính',
  'Đinh',
  'Mậu',
  'Kỷ',
];

// 12 chi
const chiNames = [
  "Thân (Khỉ)",
  "Dậu (Gà)",
  "Tuất (Chó)",
  "Hợi (Lợn)",
  "Tý (Chuột)",
  "Sửu (Trâu)",
  "Dần (Cọp - Hổ)",
  "Mão (Mèo)",
  "Thìn (Rồng)",
  "Tỵ (Rắn)",
  "Ngọ (Ngựa)",
  "Mùi (Dê)",
];

// ngũ hành
const fiveElements = [
  "Mộc (Wood)",
  "Kim (Metal)",
  "Thủy (Water)",
  "Hỏa (Fire)",
  "Thổ (Earth)",
];

// 60 year names mapping
const yearNames = {
  0: "Thạch lựu mộc (Cây thạch lựu)",
  1: "Thạch lựu mộc (Cây thạch lựu)",
  2: "Đại hải thủy (Nước đại dương)",
  3: "Đại hải thủy (Nước đại dương)",
  4: "Hải trung kim (Vàng dưới biển)",
  5: "Hải trung kim (Vàng dưới biển)",
  6: "Lộ trung hỏa (Lửa trong lò)",
  7: "Lộ trung hỏa (Lửa trong lò)",
  8: "Đại lâm mộc (Cây trong rừng lớn)",
  9: "Đại lâm mộc (Cây trong rừng lớn)",
  10: "Lộ bàng thổ (Đất giữa đường)",
  11: "Lộ bàng thổ (Đất giữa đường)",
  12: "Kiếm phong kim (Vàng đầu mũi kiếm)",
  13: "Kiếm phong kim (Vàng đầu mũi kiếm)",
  14: "Sơn đầu hỏa (Lửa trên núi)",
  15: "Sơn đầu hỏa (Lửa trên núi)",
  16: "Giản hạ thủy (Nước dưới khe)",
  17: "Giản hạ thủy (Nước dưới khe)",
  18: "Thành đầu thổ (Đất trên thành)",
  19: "Thành đầu thổ (Đất trên thành)",
  20: "Bạch lạp kim (Vàng trong nến rắn)",
  21: "Bạch lạp kim (Vàng trong nến rắn)",
  22: "Dương liễu mộc (Cây dương liễu)",
  23: "Dương liễu mộc (Cây dương liễu)",
  24: "Tuyền trung thủy (Dưới giữa dòng suối)",
  25: "Tuyền trung thủy (Dưới giữa dòng suối)",
  26: "Ốc thượng thổ (Đất trên nóc nhà)",
  27: "Ốc thượng thổ (Đất trên nóc nhà)",
  28: "Tích Lịch Hỏa (Lửa sấm sét)",
  29: "Tích Lịch Hỏa (Lửa sấm sét)",
  30: "Tùng bách mộc (Cây tùng bách)",
  31: "Tùng bách mộc (Cây tùng bách)",
  32: "Trường lưu thủy (Dòng nước lớn)",
  33: "Trường lưu thủy (Dòng nước lớn)",
  34: "Sa trung kim (Vàng trong cát)",
  35: "Sa trung kim (Vàng trong cát)",
  36: "Sơn hạ hỏa (Lửa dưới chân núi)",
  37: "Sơn hạ hỏa (Lửa dưới chân núi)",
  38: "Bình địa mộc (Cây ở đồng bằng)",
  39: "Bình địa mộc (Cây ở đồng bằng)",
  40: "Bích thượng thổ (Đất trên vách)",
  41: "Bích thượng thổ (Đất trên vách)",
  42: "Kim bạch kim (Vàng pha bạch kim)",
  43: "Kim bạch kim (Vàng pha bạch kim)",
  44: "Phú đăng hỏa (Lửa đèn dầu)",
  45: "Phú đăng hỏa (Lửa đèn dầu)",
  46: "Thiên hà thủy (Nước trên trời)",
  47: "Thiên hà thủy (Nước trên trời)",
  48: "Đại dịch thổ (Đất thuộc 1 khu lớn)",
  49: "Đại dịch thổ (Đất thuộc 1 khu lớn)",
  50: "Thoa xuyến kim (Vàng trang sức)",
  51: "Thoa xuyến kim (Vàng trang sức)",
  52: "Tang đố mộc (Gỗ cây dâu)",
  53: "Tang đố mộc (Gỗ cây dâu)",
  54: "Đại khê thủy (Nước dưới khe lớn)",
  55: "Đại khê thủy (Nước dưới khe lớn)",
  56: "Sa trung thổ (Đất lẫn trong cát)",
  57: "Sa trung thổ (Đất lẫn trong cát)",
  58: "Thiên thượng hỏa (Lửa trên trời)",
  59: "Thiên thượng hỏa (Lửa trên trời)"
};

// 30 year names mapping
const yearNames2 = {
  0: "Thạch lựu mộc (Cây thạch lựu)",
  1: "Đại hải thủy (Nước đại dương)",
  2: "Hải trung kim (Vàng dưới biển)",
  3: "Lộ trung hỏa (Lửa trong lò)",
  4: "Đại lâm mộc (Cây trong rừng lớn)",
  5: "Lộ bàng thổ (Đất giữa đường)",
  6: "Kiếm phong kim (Vàng đầu mũi kiếm)",
  7: "Sơn đầu hỏa (Lửa trên núi)",
  8: "Giản hạ thủy (Nước dưới khe)",
  9: "Thành đầu thổ (Đất trên thành)",
  10: "Bạch lạp kim (Vàng trong nến rắn)",
  11: "Dương liễu mộc (Cây dương liễu)",
  12: "Tuyền trung thủy (Dưới giữa dòng suối)",
  13: "Ốc thượng thổ (Đất trên nóc nhà)",
  14: "Tích Lịch Hỏa (Lửa sấm sét)",
  15: "Tùng bách mộc (Cây tùng bách)",
  16: "Trường lưu thủy (Dòng nước lớn)",
  17: "Sa trung kim (Vàng trong cát)",
  18: "Sơn hạ hỏa (Lửa dưới chân núi)",
  19: "Bình địa mộc (Cây ở đồng bằng)",
  20: "Bích thượng thổ (Đất trên vách)",
  21: "Kim bạch kim (Vàng pha bạch kim)",
  22: "Phú đăng hỏa (Lửa đèn dầu)",
  23: "Thiên hà thủy (Nước trên trời)",
  24: "Đại dịch thổ (Đất thuộc 1 khu lớn)",
  25: "Thoa xuyến kim (Vàng trang sức)",
  26: "Tang đố mộc (Gỗ cây dâu)",
  27: "Đại khê thủy (Nước dưới khe lớn)",
  28: "Sa trung thổ (Đất lẫn trong cát)",
  29: "Thiên thượng hỏa (Lửa trên trời)"
};



class VietnameseZodiacYear {
  constructor(currentYear = (new Date()).getFullYear()) {
    this.currentYear = currentYear;
  }

  getElementByYear(canIndex, chiIndex) {
    const total = parseInt(canIndex) + parseInt(chiIndex);
    // console.log('total', total);
    const elementIndex = total % 5;
    return fiveElements[elementIndex];
  }

  getYearNameObject(year) {
    if (!year)
      year = this.currentYear;

    const canIndex = year % 10;
    // console.log('canIndex', canIndex);
    const chiIndex = year % 12;
    // console.log('chiIndex', chiIndex);

    const canName = canNames[canIndex];
    // console.log('canName', canName);

    const chiName = chiNames[chiIndex];
    // console.log('chiName', chiName);

    // find thien can index
    let thienCanIndex = -1;
    for (var key in thienCanMap) {
      if (thienCanMap[key].includes(canName)) {
        thienCanIndex = key;
        break;
      }
    }

    // console.log('thienCanIndex', thienCanIndex);

    // find dia chi index
    let diaChiIndex = -1;
    for (var key in diaChiMap) {
      if (diaChiMap[key].includes(chiName)) {
        diaChiIndex = key;
        break;
      }
    }

    // console.log('diaChiIndex', diaChiIndex);

    if (thienCanIndex === -1 || diaChiIndex === -1) {
      return 'Không tìm thấy';
    }

    const element = this.getElementByYear(thienCanIndex, diaChiIndex);
    // console.log('element', element);

    // 1
    // const detailElement = yearNames[year % 60];
    // 2
    const temp = parseInt((year % 60) / 2);
    const detailElement = yearNames2[temp];

    return {
      canName,
      chiName,
      element,
      detailElement,
    };
  }

  getYearName(year) {
    const { canName, chiName, element, detailElement } = this.getYearNameObject(year);
    return `${canName} ${chiName} - ${element} - ${detailElement}`;
  }

  getYearNameByAge(age) {
    const year = this.currentYear - age;
    return this.getYearName(year);
  }

  testYearNames() {
    for (let i = 1940; i <= 2050; i++) {
      console.log(`Tuổi âm lịch 12 con giáp của năm ${i} là: ${this.getYearName(i)}`);
    }
  }

  testYearNamesByAge() {
    for (let i = 20; i < 90; i++) {
      console.log(`Tuổi âm lịch 12 con giáp ở tuổi ${i} là: ${this.getYearNameByAge(i)}`);
    }
  }
}

// Usage
const zodiac = new VietnameseZodiacYear();
zodiac.testYearNames();
zodiac.testYearNamesByAge();
