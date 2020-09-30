from flask import Flask, jsonify
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, JWTManager

app = Flask(__name__)
app.config["SECRET_KEY"] = "secret"
CORS(app)
JWTManager(app)


@app.route("/login", methods=["POST"])
def login():
    token = create_access_token({"id": 1 })    
    return jsonify({"access_token" : token})


@app.route("/protected")
@jwt_required
def protected():
    return jsonify({"message": ö})


if __name__ == "__main__":
    app.run(debug=True)