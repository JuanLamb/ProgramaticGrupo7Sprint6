Creacion y migracion de modelos en orden:

sequelize model:generate --name Color --attributes color:string

sequelize model:generate --name Brand --attributes name:string

sequelize model:generate --name Size --attributes type:string

sequelize model:generate --name Gender --attributes type:string

sequelize model:generate --name Category --attributes name:string

sequelize model:generate --name Payment --attributes type:string

sequelize model:generate --name State --attributes description:string

sequelize model:generate --name Shipping --attributes name:string,street:string,dni:integer,number:integer,price:decimal,phoneNumber:integer

sequelize model:generate --name Adress --attributes street:string,number:integer

sequelize model:generate --name Avatar --attributes name:string

sequelize model:generate --name User_category --attributes name:string

sequelize model:generate --name User --attributes first_name:string,last_name:string,username:string,email:string,password:string,avatars_id:integer,adresses_id:integer,user_categories_id:integer

sequelize model:generate --name Product --attributes name:string,price:decimal,stock_min:integer,stock_max:integer,discount:integer,description:text,offer:integer,season:integer,brands_id:integer,genders_id:integer,colors_id:integer,sizes_id:integer,categories_id:integer

sequelize model:generate --name Image --attributes name:string,products_id:integer

sequelize model:generate --name Order --attributes number:integer,date:date,total:decimal,shippings_id:integer,states_id:integer,payments_id:integer,users_id:integer

sequelize model:generate --name Order_detail --attributes quantity:decimal,subtotal:decimal,orders_id:integer,products_id:integer


