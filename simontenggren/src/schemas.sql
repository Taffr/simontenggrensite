DROP TABLE IF EXISTS Posters;
DROP TABLE IF EXISTS Posts;

CREATE TABLE Posters (
    posterEmail TEXT,
    posterName TEXT
);

CREATE TABLE Posts (
    postID int NOT NULL AUTO_INCREMENT,
    posterEmail TEXT REFERENCES Posters(posterEmail),
    title TEXT,
    body TEXT,
    PRIMARY KEY (postID)
);
