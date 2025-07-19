# 📝 Google Keep Clone

A minimalist Google Keep-style note-taking app built using **Java**, **Spring Boot**, **PostgreSQL**, and **Vanilla JavaScript**.

## ✨ Features

- User Sign Up & Login
- Create and view notes
- Archive and Trash functionality
- **Unarchive** notes from Archive
- **Delete** notes permanently from Trash
- **Delete Account** feature for users
- Separate pages for Home, Archive, and Trash
- Clean, responsive UI

## 🔧 Tech Stack

- **Backend:** Java, Spring Boot, Spring Data JPA
- **Database:** PostgreSQL
- **Frontend:** HTML, CSS, JavaScript
- **Build Tool:** Maven

## 📁 Folder Structure

```text
googlekeepclone/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/utej/googlekeepclone/
│       │       ├── controller/
│       │       ├── model/
│       │       ├── repository/
│       │       └── service/
│       ├── resources/
│       │   ├── static/
│       │   │   ├── home/
│       │   │   ├── archive/
│       │   │   └── trash/
│       │   └── application.properties
├── pom.xml
```
## ⚙️ Getting Started

### 1. Clone the repo

git clone https://github.com/utej8553/KeepClone.git
cd KeepClone
2. Configure the Database
Make sure PostgreSQL is installed and running.

Create a database:

sql
CREATE DATABASE keepclone;
Update application.properties:

properties
spring.datasource.url=jdbc:postgresql://localhost:5432/keepclone
spring.datasource.username=your_postgres_username
spring.datasource.password=your_postgres_password
spring.jpa.hibernate.ddl-auto=update
3. Run the Application
Visit:
👉 http://localhost:8080

📬 API Endpoints
Method	Endpoint	Description
POST	/api/signup	Register a new user
POST	/api/login	Login an existing user
GET	/api/notes	Get all notes
POST	/api/notes	Add a new note
POST	/api/archive	Archive a note
POST	/api/trash	Move a note to trash
POST	/api/unarchive	Unarchive a note
POST	/api/deleteNote	Permanently delete a trashed note
POST	/api/deleteAcc	Delete the user's account
GET	/api/notes/archive	Get archived notes
GET	/api/notes/trash	Get trashed notes

🧑‍💻 Author
Made with ❤️ by Utej Avulla

⚠️ This project is not affiliated with Google Keep and is for educational/demo purposes only.
