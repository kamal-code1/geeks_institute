class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_record = f"{self.phone_number} called {other_phone.phone_number}"
        print(call_record)
        self.call_history.append(call_record)

    def show_call_history(self):
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }
        self.messages.append(message)
        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    def show_outgoing_messages(self):
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(f"To: {message['to']} - Message: {message['content']}")

    def show_incoming_messages(self):
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(f"From: {message['from']} - Message: {message['content']}")

    def show_messages_from(self, sender_number):
        for message in self.messages:
            if message["from"] == sender_number and message["to"] == self.phone_number:
                print(f"From: {message['from']} - Message: {message['content']}")


phone1 = Phone("123-456")
phone2 = Phone("789-012")

phone1.call(phone2)
phone2.call(phone1)

phone1.send_message(phone2, "Hello!")
phone2.send_message(phone1, "Hi, how are you?")

print("\nCall history phone1:")
phone1.show_call_history()

print("\nCall history phone2:")
phone2.show_call_history()

print("\nOutgoing messages phone1:")
phone1.show_outgoing_messages()

print("\nIncoming messages phone2:")
phone2.show_incoming_messages()

print("\nMessages to phone1 from 789-012:")
phone1.show_messages_from("789-012")
