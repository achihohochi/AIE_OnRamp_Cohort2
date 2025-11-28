# Backend API - Sentiment Analysis

## How to Run the App

### Prerequisites
Make sure you have Python 3.7+ installed.

### Installation

1. Install the required dependencies:
```bash
pip install fastapi uvicorn
```

### Running the Application

1. Navigate to the `advanced` directory:
```bash
cd advanced
```

2. Start the FastAPI server:
```bash
uvicorn app:app --reload
```

The `--reload` flag enables auto-reload on code changes (useful for development).

3. The API will be available at:
   - **API Base URL**: `http://localhost:8000`
   - **Interactive API Docs**: `http://localhost:8000/docs` (Swagger UI)
   - **Alternative Docs**: `http://localhost:8000/redoc` (ReDoc)

### Testing the API

You can test the sentiment endpoint using curl:

```bash
curl -X POST "http://localhost:8000/sentiment" \
     -H "Content-Type: application/json" \
     -d '{"text": "I love this product!"}'
```

Expected response:
```json
{"sentiment": "positive"}
```

Or use the interactive documentation at `http://localhost:8000/docs` to test the endpoint directly in your browser.

### API Endpoint

**POST** `/sentiment`

**Request Body:**
```json
{
  "text": "Your text here"
}
```

**Response:**
```json
{
  "sentiment": "positive" | "negative" | "neutral"
}
```
