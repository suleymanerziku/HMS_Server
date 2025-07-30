import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length, IsBoolean, IsOptional, IsUUID, IsDate, IsPhoneNumber } from 'class-validator';

export class UpdateUserDto {
   @ApiProperty({ example: 'Mr', description: 'Title of the user' })
   @IsString()
   @Length(3, 100)
   title: string;
   
   @ApiProperty({ example: 'John', description: 'First name of the user' })
   @IsString()
   @Length(3, 100)
   firstName: string;

   @ApiProperty({ example: 'Bob', description: 'Middle name of the user' })
   @IsString()
   @Length(3, 100)
   middleName: string;

   @ApiProperty({ example: 'Tom', description: 'Last name of the user' })
   @IsString()
   @Length(3, 100)
   lastName: string;

   @ApiProperty({ example: 'john.bob', description: 'Username for the user account' })
   @IsString()
   @Length(7, 200)
   username: string;

   @ApiProperty({ example: 'johnbob@example.com', description: 'email address of the user' })
   @IsEmail()
   @Length(5, 255)
   email: string;
   
   @ApiProperty({ example: 'password123', description: 'Password for the user account' })
   @IsString()
   @Length(8, 255)
   password: string;

   @ApiProperty({ example: 'johnbob@example.com', description: 'email address of the user' })
   @IsPhoneNumber()
   @Length(5, 20)
   phoneNumber: string;

   @ApiProperty({ example: '1990-01-01', description: 'Date of birth of the user' })
   @IsDate()
   dateOfBirth: Date;








}


