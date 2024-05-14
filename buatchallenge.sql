CREATE TABLE Users (
    user_id serial,
    user_name varchar(255),
    user_email varchar(255),
    user_password varchar(255),
    created_at timestamp,
	updated_at timestamp
);

SELECT * FROM public.users

INSERT INTO public.users ( user_id, user_name, user_email ,user_password, created_at, updated_at)
VALUES 
	(1, 'Dije', 'dwina147@gmail.com', 'fafifu123',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    (2, 'Nane', 'naneags@gmail.com', 'naneags123',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP),
    (3, 'Ilyas', 'mhdilyas@gmail.com' , 'ilyas123',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);