# GoogleKeepClone
# 📝 Keep Clone

A minimalist Google Keep-style note-taking app built using **Java**, **Spring Boot**, **PostgreSQL**, and **Vanilla JavaScript**.

## ✨ Features

- User Sign Up & Login
- Create and view notes
- Archive and Trash functionality
- Separate pages for Home, Archive, and Trash
- Clean responsive UI

## 🔧 Tech Stack

- **Backend:** Java, Spring Boot, Spring Data JPA
- **Database:** PostgreSQL
- **Frontend:** HTML, CSS, JavaScript
- **Build Tool:** Maven

## 📁 Folder Structure

googlekeepclone/
├── src/
│ └── main/
│ ├── java/
│ │ └── com/utej/googlekeepclone/
│ │ ├── controller/
│ │ ├── model/
│ │ ├── repository/
│ │ └── service/
│ ├── resources/
│ │ ├── static/
│ │ │ ├── home/
│ │ │ ├── archive/
│ │ │ └── trash/
│ │ └── application.properties
├── pom.xml
## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/utej8553/KeepClone.git
cd KeepClone
2. Configure the Database
Make sure PostgreSQL is installed and running.

Create a database named:

CREATE DATABASE keepclone;
Update the application.properties file with your credentials:

spring.datasource.url=jdbc:postgresql://localhost:5432/keepclone
spring.datasource.username=your_postgres_username
spring.datasource.password=your_postgres_password
spring.jpa.hibernate.ddl-auto=update


http://localhost:8080
📬 API Endpoints
Method	Endpoint	Description
POST	/api/signup	Register a new user
POST	/api/login	Login an existing user
GET	/api/notes	Get all notes
POST	/api/notes	Add a new note
POST	/api/archive	Archive a note
POST	/api/trash	Move a note to trash
GET	/api/notes/archive	Get archived notes
GET	/api/notes/trash	Get trashed notes

🧑‍💻 Author
Made with ❤️ by Utej Avulla
