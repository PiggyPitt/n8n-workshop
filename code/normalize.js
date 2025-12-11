const items = $input.all();

// ใช้ item แรก เพราะ API ส่ง daily เป็นข้อมูลแบบ array 1 ชุด
const data = items[0].json;

const daily = data.daily;
const date = daily.time[0]; // 2025-12-10

// format วันที่เป็น dd/mm/yyyy
const formattedDate = new Date(date).toLocaleDateString("th-TH", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
});

const maxTemp = daily.temperature_2m_max[0];
const minTemp = daily.temperature_2m_min[0];

// เวลาขึ้น-ตกดวงอาทิตย์
const sunrise = daily.sunrise[0].split("T")[1];
const sunset = daily.sunset[0].split("T")[1];

// โอกาสฝนตก
let rainPercent = daily.precipitation_probability_max[0];

// สร้างข้อความ output
const message =
    `Weather prediction ${formattedDate}
Max Temperature: ${maxTemp} °C
Min Temperature: ${minTemp} °C
Sunrise: ${sunrise}
Sunset: ${sunset}
Rain: ${rainPercent}%`;

return [{
    json: {
        text: message
    }
}];

