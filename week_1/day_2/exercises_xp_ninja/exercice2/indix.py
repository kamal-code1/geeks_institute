def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        full_name = f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:
        full_name = f"{first_name.capitalize()} {last_name.capitalize()}"
    return full_name

print(get_full_name("john", "lee", "hooker"))
print(get_full_name("bruce", "lee"))
