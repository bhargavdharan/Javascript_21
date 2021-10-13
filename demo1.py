# x = 1
# while True:
#     if x % 6 == 0:
#         break
#     print(x)
#     x += 1

#-----------

x = 36
y = 2 
print(x//y)

print('\t'.isspace())

a = 'bubble'
for i in range(len(a)):
    a[i].upper()
print(a)

a = "string"
print(a.replace("rg","12"))

del1 = {'alpha','beta'}
del2 = {'alpha','gamma'}
del3 = del2.union(del1)
print(del3)

alpha = [21,32,12,1,2,7,55]
alpha.pop(1)
print(alpha)

l = [1,2,3,[4,5]]
l1 = l.copy()
# l.extend([6,7])
# l.append([8])
l1[1] = 6
print(l,l1)

# var = 1
# while(var == 1 ):
#     num = input("Enter a number :")
#     print("You entered: ",num)
# print("The loop ends!");

a = 20
b = 40

for num in range(a, b+1):
    if num>1:
        for i in range(2,num):
            if(num%i) ==0:
                break
        else:
            print(num)

a = ['hello']

a += 'world'

print(a)

class foo:
    def __init__(self,x):
        self.x = x
    def __lt__(self,other):
        if self.x < other.x:
          return True
        else:
            return False
a = foo(2)
b = foo(3)

print(a<b)


class A():
    def __init__(self, bound=63):
        self.bound = bound
obj1 = A()
obj2 = A(42)
print(obj1.bound)
print(obj2.bound)

numbers = (1,2,3,4)
result = map(lambda x: x+x,numbers)
print(list(result))
