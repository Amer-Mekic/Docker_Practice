#include<iostream>

int sum(int a, int b){
    return a+b;
}

int main(){
    int a,b;
    while(true){
        std::cout<<"*** Input non-integer to quit program! *** "<<std::endl;
        std::cout<<"Enter 1st integer: ";
        if (!(std::cin >> a)) {
            std::cout << "Invalid input. Quitting program"<<std::endl;
            break;
        }
        std::cout<<"Enter 2nd integer: ";
        if (!(std::cin >> b)) {
            std::cout << "Invalid input. Quitting program"<<std::endl;
            break;
        }
        std::cout<<"Sum of "<<a<<" and "<<b<<" is: "<<sum(a,b)<<std::endl;
    }
    return 0;
}