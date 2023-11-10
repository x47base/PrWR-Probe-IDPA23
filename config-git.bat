@echo off
echo ##### My Git Configuration #####
set /p user_var=username: 
set /p email_var=email: 
@git config user.name "%input%"
@git config user.email "%email_var%"
echo git configuration : complete