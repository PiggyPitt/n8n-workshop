curl --location 'https://api.line.me/v2/bot/message/broadcast' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer YOUR_LONG_LIVED_ACCESS_TOKEN' \
--data '{
  "messages": [
    {
      "type": "text",
      "text": "Hello from n8n!"
    }
  ]
}'