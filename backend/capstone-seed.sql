-- both test users have the password "password"
INSERT INTO users (username, PASSWORD, first_name, last_name, email, is_admin)
        VALUES ('testuser', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'Test', 'User', 'joel@joelburton.com', FALSE), ('testadmin', '$2b$12$AZH7virni5jlTTiGgEg4zu3lSvAw68qVEfSIOjJ3RqtbJbdW/Oi5q', 'Test', 'Admin!', 'joel@joelburton.com', TRUE);
