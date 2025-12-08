#include <iostream>
#include <string>
using namespace std;

int main() {
    string str;
    cout << "Please enter the string to check how many times lowercase vowels occurs in this : ";
    getline(cin, str);
    int count = 0;
    for(int i=0; i<str.length(); i++) {
      if(str[i] == 'a' || str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' || str[i] == 'u') {
         count++;
      }
    }

    cout << count << endl;
    return 0;
}
