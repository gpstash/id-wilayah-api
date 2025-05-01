/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const lokaid = $root.lokaid = (() => {

    /**
     * Namespace lokaid.
     * @exports lokaid
     * @namespace
     */
    const lokaid = {};

    lokaid.AddressData = (function() {

        /**
         * Properties of an AddressData.
         * @memberof lokaid
         * @interface IAddressData
         * @property {string|null} [code] AddressData code
         * @property {string|null} [value] AddressData value
         */

        /**
         * Constructs a new AddressData.
         * @memberof lokaid
         * @classdesc Represents an AddressData.
         * @implements IAddressData
         * @constructor
         * @param {lokaid.IAddressData=} [properties] Properties to set
         */
        function AddressData(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddressData code.
         * @member {string} code
         * @memberof lokaid.AddressData
         * @instance
         */
        AddressData.prototype.code = "";

        /**
         * AddressData value.
         * @member {string} value
         * @memberof lokaid.AddressData
         * @instance
         */
        AddressData.prototype.value = "";

        /**
         * Creates a new AddressData instance using the specified properties.
         * @function create
         * @memberof lokaid.AddressData
         * @static
         * @param {lokaid.IAddressData=} [properties] Properties to set
         * @returns {lokaid.AddressData} AddressData instance
         */
        AddressData.create = function create(properties) {
            return new AddressData(properties);
        };

        /**
         * Encodes the specified AddressData message. Does not implicitly {@link lokaid.AddressData.verify|verify} messages.
         * @function encode
         * @memberof lokaid.AddressData
         * @static
         * @param {lokaid.IAddressData} message AddressData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.value);
            return writer;
        };

        /**
         * Encodes the specified AddressData message, length delimited. Does not implicitly {@link lokaid.AddressData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.AddressData
         * @static
         * @param {lokaid.IAddressData} message AddressData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddressData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddressData message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.AddressData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.AddressData} AddressData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.AddressData();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.string();
                        break;
                    }
                case 2: {
                        message.value = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AddressData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.AddressData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.AddressData} AddressData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddressData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddressData message.
         * @function verify
         * @memberof lokaid.AddressData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddressData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isString(message.value))
                    return "value: string expected";
            return null;
        };

        /**
         * Creates an AddressData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.AddressData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.AddressData} AddressData
         */
        AddressData.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.AddressData)
                return object;
            let message = new $root.lokaid.AddressData();
            if (object.code != null)
                message.code = String(object.code);
            if (object.value != null)
                message.value = String(object.value);
            return message;
        };

        /**
         * Creates a plain object from an AddressData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.AddressData
         * @static
         * @param {lokaid.AddressData} message AddressData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddressData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = "";
                object.value = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = message.value;
            return object;
        };

        /**
         * Converts this AddressData to JSON.
         * @function toJSON
         * @memberof lokaid.AddressData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddressData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddressData
         * @function getTypeUrl
         * @memberof lokaid.AddressData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddressData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.AddressData";
        };

        return AddressData;
    })();

    lokaid.GetAllStatesRequest = (function() {

        /**
         * Properties of a GetAllStatesRequest.
         * @memberof lokaid
         * @interface IGetAllStatesRequest
         */

        /**
         * Constructs a new GetAllStatesRequest.
         * @memberof lokaid
         * @classdesc Represents a GetAllStatesRequest.
         * @implements IGetAllStatesRequest
         * @constructor
         * @param {lokaid.IGetAllStatesRequest=} [properties] Properties to set
         */
        function GetAllStatesRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetAllStatesRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {lokaid.IGetAllStatesRequest=} [properties] Properties to set
         * @returns {lokaid.GetAllStatesRequest} GetAllStatesRequest instance
         */
        GetAllStatesRequest.create = function create(properties) {
            return new GetAllStatesRequest(properties);
        };

        /**
         * Encodes the specified GetAllStatesRequest message. Does not implicitly {@link lokaid.GetAllStatesRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {lokaid.IGetAllStatesRequest} message GetAllStatesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllStatesRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetAllStatesRequest message, length delimited. Does not implicitly {@link lokaid.GetAllStatesRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {lokaid.IGetAllStatesRequest} message GetAllStatesRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllStatesRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllStatesRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetAllStatesRequest} GetAllStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllStatesRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetAllStatesRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllStatesRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetAllStatesRequest} GetAllStatesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllStatesRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllStatesRequest message.
         * @function verify
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllStatesRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetAllStatesRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetAllStatesRequest} GetAllStatesRequest
         */
        GetAllStatesRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetAllStatesRequest)
                return object;
            return new $root.lokaid.GetAllStatesRequest();
        };

        /**
         * Creates a plain object from a GetAllStatesRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {lokaid.GetAllStatesRequest} message GetAllStatesRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllStatesRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetAllStatesRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetAllStatesRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllStatesRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllStatesRequest
         * @function getTypeUrl
         * @memberof lokaid.GetAllStatesRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllStatesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetAllStatesRequest";
        };

        return GetAllStatesRequest;
    })();

    lokaid.GetAllStatesResponse = (function() {

        /**
         * Properties of a GetAllStatesResponse.
         * @memberof lokaid
         * @interface IGetAllStatesResponse
         * @property {Array.<lokaid.IAddressData>|null} [states] GetAllStatesResponse states
         */

        /**
         * Constructs a new GetAllStatesResponse.
         * @memberof lokaid
         * @classdesc Represents a GetAllStatesResponse.
         * @implements IGetAllStatesResponse
         * @constructor
         * @param {lokaid.IGetAllStatesResponse=} [properties] Properties to set
         */
        function GetAllStatesResponse(properties) {
            this.states = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetAllStatesResponse states.
         * @member {Array.<lokaid.IAddressData>} states
         * @memberof lokaid.GetAllStatesResponse
         * @instance
         */
        GetAllStatesResponse.prototype.states = $util.emptyArray;

        /**
         * Creates a new GetAllStatesResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {lokaid.IGetAllStatesResponse=} [properties] Properties to set
         * @returns {lokaid.GetAllStatesResponse} GetAllStatesResponse instance
         */
        GetAllStatesResponse.create = function create(properties) {
            return new GetAllStatesResponse(properties);
        };

        /**
         * Encodes the specified GetAllStatesResponse message. Does not implicitly {@link lokaid.GetAllStatesResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {lokaid.IGetAllStatesResponse} message GetAllStatesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllStatesResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.states != null && message.states.length)
                for (let i = 0; i < message.states.length; ++i)
                    $root.lokaid.AddressData.encode(message.states[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetAllStatesResponse message, length delimited. Does not implicitly {@link lokaid.GetAllStatesResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {lokaid.IGetAllStatesResponse} message GetAllStatesResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetAllStatesResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetAllStatesResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetAllStatesResponse} GetAllStatesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllStatesResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetAllStatesResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.states && message.states.length))
                            message.states = [];
                        message.states.push($root.lokaid.AddressData.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetAllStatesResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetAllStatesResponse} GetAllStatesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetAllStatesResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetAllStatesResponse message.
         * @function verify
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetAllStatesResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.states != null && message.hasOwnProperty("states")) {
                if (!Array.isArray(message.states))
                    return "states: array expected";
                for (let i = 0; i < message.states.length; ++i) {
                    let error = $root.lokaid.AddressData.verify(message.states[i]);
                    if (error)
                        return "states." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetAllStatesResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetAllStatesResponse} GetAllStatesResponse
         */
        GetAllStatesResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetAllStatesResponse)
                return object;
            let message = new $root.lokaid.GetAllStatesResponse();
            if (object.states) {
                if (!Array.isArray(object.states))
                    throw TypeError(".lokaid.GetAllStatesResponse.states: array expected");
                message.states = [];
                for (let i = 0; i < object.states.length; ++i) {
                    if (typeof object.states[i] !== "object")
                        throw TypeError(".lokaid.GetAllStatesResponse.states: object expected");
                    message.states[i] = $root.lokaid.AddressData.fromObject(object.states[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetAllStatesResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {lokaid.GetAllStatesResponse} message GetAllStatesResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetAllStatesResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.states = [];
            if (message.states && message.states.length) {
                object.states = [];
                for (let j = 0; j < message.states.length; ++j)
                    object.states[j] = $root.lokaid.AddressData.toObject(message.states[j], options);
            }
            return object;
        };

        /**
         * Converts this GetAllStatesResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetAllStatesResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetAllStatesResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetAllStatesResponse
         * @function getTypeUrl
         * @memberof lokaid.GetAllStatesResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetAllStatesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetAllStatesResponse";
        };

        return GetAllStatesResponse;
    })();

    lokaid.GetStateRequest = (function() {

        /**
         * Properties of a GetStateRequest.
         * @memberof lokaid
         * @interface IGetStateRequest
         * @property {string|null} [stateCode] GetStateRequest stateCode
         */

        /**
         * Constructs a new GetStateRequest.
         * @memberof lokaid
         * @classdesc Represents a GetStateRequest.
         * @implements IGetStateRequest
         * @constructor
         * @param {lokaid.IGetStateRequest=} [properties] Properties to set
         */
        function GetStateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStateRequest stateCode.
         * @member {string} stateCode
         * @memberof lokaid.GetStateRequest
         * @instance
         */
        GetStateRequest.prototype.stateCode = "";

        /**
         * Creates a new GetStateRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {lokaid.IGetStateRequest=} [properties] Properties to set
         * @returns {lokaid.GetStateRequest} GetStateRequest instance
         */
        GetStateRequest.create = function create(properties) {
            return new GetStateRequest(properties);
        };

        /**
         * Encodes the specified GetStateRequest message. Does not implicitly {@link lokaid.GetStateRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {lokaid.IGetStateRequest} message GetStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stateCode != null && Object.hasOwnProperty.call(message, "stateCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stateCode);
            return writer;
        };

        /**
         * Encodes the specified GetStateRequest message, length delimited. Does not implicitly {@link lokaid.GetStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {lokaid.IGetStateRequest} message GetStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetStateRequest} GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetStateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stateCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetStateRequest} GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStateRequest message.
         * @function verify
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stateCode != null && message.hasOwnProperty("stateCode"))
                if (!$util.isString(message.stateCode))
                    return "stateCode: string expected";
            return null;
        };

        /**
         * Creates a GetStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetStateRequest} GetStateRequest
         */
        GetStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetStateRequest)
                return object;
            let message = new $root.lokaid.GetStateRequest();
            if (object.stateCode != null)
                message.stateCode = String(object.stateCode);
            return message;
        };

        /**
         * Creates a plain object from a GetStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {lokaid.GetStateRequest} message GetStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.stateCode = "";
            if (message.stateCode != null && message.hasOwnProperty("stateCode"))
                object.stateCode = message.stateCode;
            return object;
        };

        /**
         * Converts this GetStateRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetStateRequest
         * @function getTypeUrl
         * @memberof lokaid.GetStateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetStateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetStateRequest";
        };

        return GetStateRequest;
    })();

    lokaid.GetStateResponse = (function() {

        /**
         * Properties of a GetStateResponse.
         * @memberof lokaid
         * @interface IGetStateResponse
         * @property {lokaid.IAddressData|null} [state] GetStateResponse state
         */

        /**
         * Constructs a new GetStateResponse.
         * @memberof lokaid
         * @classdesc Represents a GetStateResponse.
         * @implements IGetStateResponse
         * @constructor
         * @param {lokaid.IGetStateResponse=} [properties] Properties to set
         */
        function GetStateResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStateResponse state.
         * @member {lokaid.IAddressData|null|undefined} state
         * @memberof lokaid.GetStateResponse
         * @instance
         */
        GetStateResponse.prototype.state = null;

        /**
         * Creates a new GetStateResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {lokaid.IGetStateResponse=} [properties] Properties to set
         * @returns {lokaid.GetStateResponse} GetStateResponse instance
         */
        GetStateResponse.create = function create(properties) {
            return new GetStateResponse(properties);
        };

        /**
         * Encodes the specified GetStateResponse message. Does not implicitly {@link lokaid.GetStateResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {lokaid.IGetStateResponse} message GetStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                $root.lokaid.AddressData.encode(message.state, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetStateResponse message, length delimited. Does not implicitly {@link lokaid.GetStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {lokaid.IGetStateResponse} message GetStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetStateResponse} GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetStateResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.state = $root.lokaid.AddressData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetStateResponse} GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStateResponse message.
         * @function verify
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state")) {
                let error = $root.lokaid.AddressData.verify(message.state);
                if (error)
                    return "state." + error;
            }
            return null;
        };

        /**
         * Creates a GetStateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetStateResponse} GetStateResponse
         */
        GetStateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetStateResponse)
                return object;
            let message = new $root.lokaid.GetStateResponse();
            if (object.state != null) {
                if (typeof object.state !== "object")
                    throw TypeError(".lokaid.GetStateResponse.state: object expected");
                message.state = $root.lokaid.AddressData.fromObject(object.state);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetStateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {lokaid.GetStateResponse} message GetStateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.state = null;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = $root.lokaid.AddressData.toObject(message.state, options);
            return object;
        };

        /**
         * Converts this GetStateResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetStateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetStateResponse
         * @function getTypeUrl
         * @memberof lokaid.GetStateResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetStateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetStateResponse";
        };

        return GetStateResponse;
    })();

    lokaid.GetCitiesInStateRequest = (function() {

        /**
         * Properties of a GetCitiesInStateRequest.
         * @memberof lokaid
         * @interface IGetCitiesInStateRequest
         * @property {string|null} [stateCode] GetCitiesInStateRequest stateCode
         */

        /**
         * Constructs a new GetCitiesInStateRequest.
         * @memberof lokaid
         * @classdesc Represents a GetCitiesInStateRequest.
         * @implements IGetCitiesInStateRequest
         * @constructor
         * @param {lokaid.IGetCitiesInStateRequest=} [properties] Properties to set
         */
        function GetCitiesInStateRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCitiesInStateRequest stateCode.
         * @member {string} stateCode
         * @memberof lokaid.GetCitiesInStateRequest
         * @instance
         */
        GetCitiesInStateRequest.prototype.stateCode = "";

        /**
         * Creates a new GetCitiesInStateRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {lokaid.IGetCitiesInStateRequest=} [properties] Properties to set
         * @returns {lokaid.GetCitiesInStateRequest} GetCitiesInStateRequest instance
         */
        GetCitiesInStateRequest.create = function create(properties) {
            return new GetCitiesInStateRequest(properties);
        };

        /**
         * Encodes the specified GetCitiesInStateRequest message. Does not implicitly {@link lokaid.GetCitiesInStateRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {lokaid.IGetCitiesInStateRequest} message GetCitiesInStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCitiesInStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stateCode != null && Object.hasOwnProperty.call(message, "stateCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stateCode);
            return writer;
        };

        /**
         * Encodes the specified GetCitiesInStateRequest message, length delimited. Does not implicitly {@link lokaid.GetCitiesInStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {lokaid.IGetCitiesInStateRequest} message GetCitiesInStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCitiesInStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCitiesInStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetCitiesInStateRequest} GetCitiesInStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCitiesInStateRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetCitiesInStateRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stateCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCitiesInStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetCitiesInStateRequest} GetCitiesInStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCitiesInStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCitiesInStateRequest message.
         * @function verify
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCitiesInStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.stateCode != null && message.hasOwnProperty("stateCode"))
                if (!$util.isString(message.stateCode))
                    return "stateCode: string expected";
            return null;
        };

        /**
         * Creates a GetCitiesInStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetCitiesInStateRequest} GetCitiesInStateRequest
         */
        GetCitiesInStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetCitiesInStateRequest)
                return object;
            let message = new $root.lokaid.GetCitiesInStateRequest();
            if (object.stateCode != null)
                message.stateCode = String(object.stateCode);
            return message;
        };

        /**
         * Creates a plain object from a GetCitiesInStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {lokaid.GetCitiesInStateRequest} message GetCitiesInStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCitiesInStateRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.stateCode = "";
            if (message.stateCode != null && message.hasOwnProperty("stateCode"))
                object.stateCode = message.stateCode;
            return object;
        };

        /**
         * Converts this GetCitiesInStateRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetCitiesInStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCitiesInStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetCitiesInStateRequest
         * @function getTypeUrl
         * @memberof lokaid.GetCitiesInStateRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetCitiesInStateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetCitiesInStateRequest";
        };

        return GetCitiesInStateRequest;
    })();

    lokaid.GetCitiesInStateResponse = (function() {

        /**
         * Properties of a GetCitiesInStateResponse.
         * @memberof lokaid
         * @interface IGetCitiesInStateResponse
         * @property {Array.<lokaid.IAddressData>|null} [cities] GetCitiesInStateResponse cities
         */

        /**
         * Constructs a new GetCitiesInStateResponse.
         * @memberof lokaid
         * @classdesc Represents a GetCitiesInStateResponse.
         * @implements IGetCitiesInStateResponse
         * @constructor
         * @param {lokaid.IGetCitiesInStateResponse=} [properties] Properties to set
         */
        function GetCitiesInStateResponse(properties) {
            this.cities = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCitiesInStateResponse cities.
         * @member {Array.<lokaid.IAddressData>} cities
         * @memberof lokaid.GetCitiesInStateResponse
         * @instance
         */
        GetCitiesInStateResponse.prototype.cities = $util.emptyArray;

        /**
         * Creates a new GetCitiesInStateResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {lokaid.IGetCitiesInStateResponse=} [properties] Properties to set
         * @returns {lokaid.GetCitiesInStateResponse} GetCitiesInStateResponse instance
         */
        GetCitiesInStateResponse.create = function create(properties) {
            return new GetCitiesInStateResponse(properties);
        };

        /**
         * Encodes the specified GetCitiesInStateResponse message. Does not implicitly {@link lokaid.GetCitiesInStateResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {lokaid.IGetCitiesInStateResponse} message GetCitiesInStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCitiesInStateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cities != null && message.cities.length)
                for (let i = 0; i < message.cities.length; ++i)
                    $root.lokaid.AddressData.encode(message.cities[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetCitiesInStateResponse message, length delimited. Does not implicitly {@link lokaid.GetCitiesInStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {lokaid.IGetCitiesInStateResponse} message GetCitiesInStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCitiesInStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCitiesInStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetCitiesInStateResponse} GetCitiesInStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCitiesInStateResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetCitiesInStateResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.cities && message.cities.length))
                            message.cities = [];
                        message.cities.push($root.lokaid.AddressData.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCitiesInStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetCitiesInStateResponse} GetCitiesInStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCitiesInStateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCitiesInStateResponse message.
         * @function verify
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCitiesInStateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cities != null && message.hasOwnProperty("cities")) {
                if (!Array.isArray(message.cities))
                    return "cities: array expected";
                for (let i = 0; i < message.cities.length; ++i) {
                    let error = $root.lokaid.AddressData.verify(message.cities[i]);
                    if (error)
                        return "cities." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetCitiesInStateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetCitiesInStateResponse} GetCitiesInStateResponse
         */
        GetCitiesInStateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetCitiesInStateResponse)
                return object;
            let message = new $root.lokaid.GetCitiesInStateResponse();
            if (object.cities) {
                if (!Array.isArray(object.cities))
                    throw TypeError(".lokaid.GetCitiesInStateResponse.cities: array expected");
                message.cities = [];
                for (let i = 0; i < object.cities.length; ++i) {
                    if (typeof object.cities[i] !== "object")
                        throw TypeError(".lokaid.GetCitiesInStateResponse.cities: object expected");
                    message.cities[i] = $root.lokaid.AddressData.fromObject(object.cities[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetCitiesInStateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {lokaid.GetCitiesInStateResponse} message GetCitiesInStateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCitiesInStateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.cities = [];
            if (message.cities && message.cities.length) {
                object.cities = [];
                for (let j = 0; j < message.cities.length; ++j)
                    object.cities[j] = $root.lokaid.AddressData.toObject(message.cities[j], options);
            }
            return object;
        };

        /**
         * Converts this GetCitiesInStateResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetCitiesInStateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCitiesInStateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetCitiesInStateResponse
         * @function getTypeUrl
         * @memberof lokaid.GetCitiesInStateResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetCitiesInStateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetCitiesInStateResponse";
        };

        return GetCitiesInStateResponse;
    })();

    lokaid.GetCityRequest = (function() {

        /**
         * Properties of a GetCityRequest.
         * @memberof lokaid
         * @interface IGetCityRequest
         * @property {string|null} [cityCode] GetCityRequest cityCode
         */

        /**
         * Constructs a new GetCityRequest.
         * @memberof lokaid
         * @classdesc Represents a GetCityRequest.
         * @implements IGetCityRequest
         * @constructor
         * @param {lokaid.IGetCityRequest=} [properties] Properties to set
         */
        function GetCityRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCityRequest cityCode.
         * @member {string} cityCode
         * @memberof lokaid.GetCityRequest
         * @instance
         */
        GetCityRequest.prototype.cityCode = "";

        /**
         * Creates a new GetCityRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {lokaid.IGetCityRequest=} [properties] Properties to set
         * @returns {lokaid.GetCityRequest} GetCityRequest instance
         */
        GetCityRequest.create = function create(properties) {
            return new GetCityRequest(properties);
        };

        /**
         * Encodes the specified GetCityRequest message. Does not implicitly {@link lokaid.GetCityRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {lokaid.IGetCityRequest} message GetCityRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCityRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cityCode != null && Object.hasOwnProperty.call(message, "cityCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityCode);
            return writer;
        };

        /**
         * Encodes the specified GetCityRequest message, length delimited. Does not implicitly {@link lokaid.GetCityRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {lokaid.IGetCityRequest} message GetCityRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCityRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCityRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetCityRequest} GetCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCityRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetCityRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cityCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCityRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetCityRequest} GetCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCityRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCityRequest message.
         * @function verify
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCityRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cityCode != null && message.hasOwnProperty("cityCode"))
                if (!$util.isString(message.cityCode))
                    return "cityCode: string expected";
            return null;
        };

        /**
         * Creates a GetCityRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetCityRequest} GetCityRequest
         */
        GetCityRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetCityRequest)
                return object;
            let message = new $root.lokaid.GetCityRequest();
            if (object.cityCode != null)
                message.cityCode = String(object.cityCode);
            return message;
        };

        /**
         * Creates a plain object from a GetCityRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {lokaid.GetCityRequest} message GetCityRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCityRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.cityCode = "";
            if (message.cityCode != null && message.hasOwnProperty("cityCode"))
                object.cityCode = message.cityCode;
            return object;
        };

        /**
         * Converts this GetCityRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetCityRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCityRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetCityRequest
         * @function getTypeUrl
         * @memberof lokaid.GetCityRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetCityRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetCityRequest";
        };

        return GetCityRequest;
    })();

    lokaid.GetCityResponse = (function() {

        /**
         * Properties of a GetCityResponse.
         * @memberof lokaid
         * @interface IGetCityResponse
         * @property {lokaid.IAddressData|null} [city] GetCityResponse city
         */

        /**
         * Constructs a new GetCityResponse.
         * @memberof lokaid
         * @classdesc Represents a GetCityResponse.
         * @implements IGetCityResponse
         * @constructor
         * @param {lokaid.IGetCityResponse=} [properties] Properties to set
         */
        function GetCityResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetCityResponse city.
         * @member {lokaid.IAddressData|null|undefined} city
         * @memberof lokaid.GetCityResponse
         * @instance
         */
        GetCityResponse.prototype.city = null;

        /**
         * Creates a new GetCityResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {lokaid.IGetCityResponse=} [properties] Properties to set
         * @returns {lokaid.GetCityResponse} GetCityResponse instance
         */
        GetCityResponse.create = function create(properties) {
            return new GetCityResponse(properties);
        };

        /**
         * Encodes the specified GetCityResponse message. Does not implicitly {@link lokaid.GetCityResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {lokaid.IGetCityResponse} message GetCityResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCityResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                $root.lokaid.AddressData.encode(message.city, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetCityResponse message, length delimited. Does not implicitly {@link lokaid.GetCityResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {lokaid.IGetCityResponse} message GetCityResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCityResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetCityResponse} GetCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCityResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetCityResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.city = $root.lokaid.AddressData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetCityResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetCityResponse} GetCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCityResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetCityResponse message.
         * @function verify
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetCityResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.city != null && message.hasOwnProperty("city")) {
                let error = $root.lokaid.AddressData.verify(message.city);
                if (error)
                    return "city." + error;
            }
            return null;
        };

        /**
         * Creates a GetCityResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetCityResponse} GetCityResponse
         */
        GetCityResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetCityResponse)
                return object;
            let message = new $root.lokaid.GetCityResponse();
            if (object.city != null) {
                if (typeof object.city !== "object")
                    throw TypeError(".lokaid.GetCityResponse.city: object expected");
                message.city = $root.lokaid.AddressData.fromObject(object.city);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetCityResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {lokaid.GetCityResponse} message GetCityResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetCityResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.city = null;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = $root.lokaid.AddressData.toObject(message.city, options);
            return object;
        };

        /**
         * Converts this GetCityResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetCityResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetCityResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetCityResponse
         * @function getTypeUrl
         * @memberof lokaid.GetCityResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetCityResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetCityResponse";
        };

        return GetCityResponse;
    })();

    lokaid.GetDistrictsInCityRequest = (function() {

        /**
         * Properties of a GetDistrictsInCityRequest.
         * @memberof lokaid
         * @interface IGetDistrictsInCityRequest
         * @property {string|null} [cityCode] GetDistrictsInCityRequest cityCode
         */

        /**
         * Constructs a new GetDistrictsInCityRequest.
         * @memberof lokaid
         * @classdesc Represents a GetDistrictsInCityRequest.
         * @implements IGetDistrictsInCityRequest
         * @constructor
         * @param {lokaid.IGetDistrictsInCityRequest=} [properties] Properties to set
         */
        function GetDistrictsInCityRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDistrictsInCityRequest cityCode.
         * @member {string} cityCode
         * @memberof lokaid.GetDistrictsInCityRequest
         * @instance
         */
        GetDistrictsInCityRequest.prototype.cityCode = "";

        /**
         * Creates a new GetDistrictsInCityRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {lokaid.IGetDistrictsInCityRequest=} [properties] Properties to set
         * @returns {lokaid.GetDistrictsInCityRequest} GetDistrictsInCityRequest instance
         */
        GetDistrictsInCityRequest.create = function create(properties) {
            return new GetDistrictsInCityRequest(properties);
        };

        /**
         * Encodes the specified GetDistrictsInCityRequest message. Does not implicitly {@link lokaid.GetDistrictsInCityRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {lokaid.IGetDistrictsInCityRequest} message GetDistrictsInCityRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictsInCityRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cityCode != null && Object.hasOwnProperty.call(message, "cityCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.cityCode);
            return writer;
        };

        /**
         * Encodes the specified GetDistrictsInCityRequest message, length delimited. Does not implicitly {@link lokaid.GetDistrictsInCityRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {lokaid.IGetDistrictsInCityRequest} message GetDistrictsInCityRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictsInCityRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDistrictsInCityRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetDistrictsInCityRequest} GetDistrictsInCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictsInCityRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetDistrictsInCityRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.cityCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDistrictsInCityRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetDistrictsInCityRequest} GetDistrictsInCityRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictsInCityRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDistrictsInCityRequest message.
         * @function verify
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDistrictsInCityRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cityCode != null && message.hasOwnProperty("cityCode"))
                if (!$util.isString(message.cityCode))
                    return "cityCode: string expected";
            return null;
        };

        /**
         * Creates a GetDistrictsInCityRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetDistrictsInCityRequest} GetDistrictsInCityRequest
         */
        GetDistrictsInCityRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetDistrictsInCityRequest)
                return object;
            let message = new $root.lokaid.GetDistrictsInCityRequest();
            if (object.cityCode != null)
                message.cityCode = String(object.cityCode);
            return message;
        };

        /**
         * Creates a plain object from a GetDistrictsInCityRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {lokaid.GetDistrictsInCityRequest} message GetDistrictsInCityRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDistrictsInCityRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.cityCode = "";
            if (message.cityCode != null && message.hasOwnProperty("cityCode"))
                object.cityCode = message.cityCode;
            return object;
        };

        /**
         * Converts this GetDistrictsInCityRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetDistrictsInCityRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDistrictsInCityRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDistrictsInCityRequest
         * @function getTypeUrl
         * @memberof lokaid.GetDistrictsInCityRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDistrictsInCityRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetDistrictsInCityRequest";
        };

        return GetDistrictsInCityRequest;
    })();

    lokaid.GetDistrictsInCityResponse = (function() {

        /**
         * Properties of a GetDistrictsInCityResponse.
         * @memberof lokaid
         * @interface IGetDistrictsInCityResponse
         * @property {Array.<lokaid.IAddressData>|null} [districts] GetDistrictsInCityResponse districts
         */

        /**
         * Constructs a new GetDistrictsInCityResponse.
         * @memberof lokaid
         * @classdesc Represents a GetDistrictsInCityResponse.
         * @implements IGetDistrictsInCityResponse
         * @constructor
         * @param {lokaid.IGetDistrictsInCityResponse=} [properties] Properties to set
         */
        function GetDistrictsInCityResponse(properties) {
            this.districts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDistrictsInCityResponse districts.
         * @member {Array.<lokaid.IAddressData>} districts
         * @memberof lokaid.GetDistrictsInCityResponse
         * @instance
         */
        GetDistrictsInCityResponse.prototype.districts = $util.emptyArray;

        /**
         * Creates a new GetDistrictsInCityResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {lokaid.IGetDistrictsInCityResponse=} [properties] Properties to set
         * @returns {lokaid.GetDistrictsInCityResponse} GetDistrictsInCityResponse instance
         */
        GetDistrictsInCityResponse.create = function create(properties) {
            return new GetDistrictsInCityResponse(properties);
        };

        /**
         * Encodes the specified GetDistrictsInCityResponse message. Does not implicitly {@link lokaid.GetDistrictsInCityResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {lokaid.IGetDistrictsInCityResponse} message GetDistrictsInCityResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictsInCityResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.districts != null && message.districts.length)
                for (let i = 0; i < message.districts.length; ++i)
                    $root.lokaid.AddressData.encode(message.districts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetDistrictsInCityResponse message, length delimited. Does not implicitly {@link lokaid.GetDistrictsInCityResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {lokaid.IGetDistrictsInCityResponse} message GetDistrictsInCityResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictsInCityResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDistrictsInCityResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetDistrictsInCityResponse} GetDistrictsInCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictsInCityResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetDistrictsInCityResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.districts && message.districts.length))
                            message.districts = [];
                        message.districts.push($root.lokaid.AddressData.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDistrictsInCityResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetDistrictsInCityResponse} GetDistrictsInCityResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictsInCityResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDistrictsInCityResponse message.
         * @function verify
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDistrictsInCityResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.districts != null && message.hasOwnProperty("districts")) {
                if (!Array.isArray(message.districts))
                    return "districts: array expected";
                for (let i = 0; i < message.districts.length; ++i) {
                    let error = $root.lokaid.AddressData.verify(message.districts[i]);
                    if (error)
                        return "districts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetDistrictsInCityResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetDistrictsInCityResponse} GetDistrictsInCityResponse
         */
        GetDistrictsInCityResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetDistrictsInCityResponse)
                return object;
            let message = new $root.lokaid.GetDistrictsInCityResponse();
            if (object.districts) {
                if (!Array.isArray(object.districts))
                    throw TypeError(".lokaid.GetDistrictsInCityResponse.districts: array expected");
                message.districts = [];
                for (let i = 0; i < object.districts.length; ++i) {
                    if (typeof object.districts[i] !== "object")
                        throw TypeError(".lokaid.GetDistrictsInCityResponse.districts: object expected");
                    message.districts[i] = $root.lokaid.AddressData.fromObject(object.districts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetDistrictsInCityResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {lokaid.GetDistrictsInCityResponse} message GetDistrictsInCityResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDistrictsInCityResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.districts = [];
            if (message.districts && message.districts.length) {
                object.districts = [];
                for (let j = 0; j < message.districts.length; ++j)
                    object.districts[j] = $root.lokaid.AddressData.toObject(message.districts[j], options);
            }
            return object;
        };

        /**
         * Converts this GetDistrictsInCityResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetDistrictsInCityResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDistrictsInCityResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDistrictsInCityResponse
         * @function getTypeUrl
         * @memberof lokaid.GetDistrictsInCityResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDistrictsInCityResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetDistrictsInCityResponse";
        };

        return GetDistrictsInCityResponse;
    })();

    lokaid.GetDistrictRequest = (function() {

        /**
         * Properties of a GetDistrictRequest.
         * @memberof lokaid
         * @interface IGetDistrictRequest
         * @property {string|null} [districtCode] GetDistrictRequest districtCode
         */

        /**
         * Constructs a new GetDistrictRequest.
         * @memberof lokaid
         * @classdesc Represents a GetDistrictRequest.
         * @implements IGetDistrictRequest
         * @constructor
         * @param {lokaid.IGetDistrictRequest=} [properties] Properties to set
         */
        function GetDistrictRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDistrictRequest districtCode.
         * @member {string} districtCode
         * @memberof lokaid.GetDistrictRequest
         * @instance
         */
        GetDistrictRequest.prototype.districtCode = "";

        /**
         * Creates a new GetDistrictRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {lokaid.IGetDistrictRequest=} [properties] Properties to set
         * @returns {lokaid.GetDistrictRequest} GetDistrictRequest instance
         */
        GetDistrictRequest.create = function create(properties) {
            return new GetDistrictRequest(properties);
        };

        /**
         * Encodes the specified GetDistrictRequest message. Does not implicitly {@link lokaid.GetDistrictRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {lokaid.IGetDistrictRequest} message GetDistrictRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.districtCode != null && Object.hasOwnProperty.call(message, "districtCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.districtCode);
            return writer;
        };

        /**
         * Encodes the specified GetDistrictRequest message, length delimited. Does not implicitly {@link lokaid.GetDistrictRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {lokaid.IGetDistrictRequest} message GetDistrictRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDistrictRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetDistrictRequest} GetDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetDistrictRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.districtCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDistrictRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetDistrictRequest} GetDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDistrictRequest message.
         * @function verify
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDistrictRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.districtCode != null && message.hasOwnProperty("districtCode"))
                if (!$util.isString(message.districtCode))
                    return "districtCode: string expected";
            return null;
        };

        /**
         * Creates a GetDistrictRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetDistrictRequest} GetDistrictRequest
         */
        GetDistrictRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetDistrictRequest)
                return object;
            let message = new $root.lokaid.GetDistrictRequest();
            if (object.districtCode != null)
                message.districtCode = String(object.districtCode);
            return message;
        };

        /**
         * Creates a plain object from a GetDistrictRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {lokaid.GetDistrictRequest} message GetDistrictRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDistrictRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.districtCode = "";
            if (message.districtCode != null && message.hasOwnProperty("districtCode"))
                object.districtCode = message.districtCode;
            return object;
        };

        /**
         * Converts this GetDistrictRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetDistrictRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDistrictRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDistrictRequest
         * @function getTypeUrl
         * @memberof lokaid.GetDistrictRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDistrictRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetDistrictRequest";
        };

        return GetDistrictRequest;
    })();

    lokaid.GetDistrictResponse = (function() {

        /**
         * Properties of a GetDistrictResponse.
         * @memberof lokaid
         * @interface IGetDistrictResponse
         * @property {lokaid.IAddressData|null} [district] GetDistrictResponse district
         */

        /**
         * Constructs a new GetDistrictResponse.
         * @memberof lokaid
         * @classdesc Represents a GetDistrictResponse.
         * @implements IGetDistrictResponse
         * @constructor
         * @param {lokaid.IGetDistrictResponse=} [properties] Properties to set
         */
        function GetDistrictResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetDistrictResponse district.
         * @member {lokaid.IAddressData|null|undefined} district
         * @memberof lokaid.GetDistrictResponse
         * @instance
         */
        GetDistrictResponse.prototype.district = null;

        /**
         * Creates a new GetDistrictResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {lokaid.IGetDistrictResponse=} [properties] Properties to set
         * @returns {lokaid.GetDistrictResponse} GetDistrictResponse instance
         */
        GetDistrictResponse.create = function create(properties) {
            return new GetDistrictResponse(properties);
        };

        /**
         * Encodes the specified GetDistrictResponse message. Does not implicitly {@link lokaid.GetDistrictResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {lokaid.IGetDistrictResponse} message GetDistrictResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.district != null && Object.hasOwnProperty.call(message, "district"))
                $root.lokaid.AddressData.encode(message.district, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetDistrictResponse message, length delimited. Does not implicitly {@link lokaid.GetDistrictResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {lokaid.IGetDistrictResponse} message GetDistrictResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetDistrictResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetDistrictResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetDistrictResponse} GetDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetDistrictResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.district = $root.lokaid.AddressData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetDistrictResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetDistrictResponse} GetDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetDistrictResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetDistrictResponse message.
         * @function verify
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetDistrictResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.district != null && message.hasOwnProperty("district")) {
                let error = $root.lokaid.AddressData.verify(message.district);
                if (error)
                    return "district." + error;
            }
            return null;
        };

        /**
         * Creates a GetDistrictResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetDistrictResponse} GetDistrictResponse
         */
        GetDistrictResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetDistrictResponse)
                return object;
            let message = new $root.lokaid.GetDistrictResponse();
            if (object.district != null) {
                if (typeof object.district !== "object")
                    throw TypeError(".lokaid.GetDistrictResponse.district: object expected");
                message.district = $root.lokaid.AddressData.fromObject(object.district);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetDistrictResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {lokaid.GetDistrictResponse} message GetDistrictResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetDistrictResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.district = null;
            if (message.district != null && message.hasOwnProperty("district"))
                object.district = $root.lokaid.AddressData.toObject(message.district, options);
            return object;
        };

        /**
         * Converts this GetDistrictResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetDistrictResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetDistrictResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetDistrictResponse
         * @function getTypeUrl
         * @memberof lokaid.GetDistrictResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetDistrictResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetDistrictResponse";
        };

        return GetDistrictResponse;
    })();

    lokaid.GetVillagesInDistrictRequest = (function() {

        /**
         * Properties of a GetVillagesInDistrictRequest.
         * @memberof lokaid
         * @interface IGetVillagesInDistrictRequest
         * @property {string|null} [districtCode] GetVillagesInDistrictRequest districtCode
         */

        /**
         * Constructs a new GetVillagesInDistrictRequest.
         * @memberof lokaid
         * @classdesc Represents a GetVillagesInDistrictRequest.
         * @implements IGetVillagesInDistrictRequest
         * @constructor
         * @param {lokaid.IGetVillagesInDistrictRequest=} [properties] Properties to set
         */
        function GetVillagesInDistrictRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVillagesInDistrictRequest districtCode.
         * @member {string} districtCode
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @instance
         */
        GetVillagesInDistrictRequest.prototype.districtCode = "";

        /**
         * Creates a new GetVillagesInDistrictRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {lokaid.IGetVillagesInDistrictRequest=} [properties] Properties to set
         * @returns {lokaid.GetVillagesInDistrictRequest} GetVillagesInDistrictRequest instance
         */
        GetVillagesInDistrictRequest.create = function create(properties) {
            return new GetVillagesInDistrictRequest(properties);
        };

        /**
         * Encodes the specified GetVillagesInDistrictRequest message. Does not implicitly {@link lokaid.GetVillagesInDistrictRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {lokaid.IGetVillagesInDistrictRequest} message GetVillagesInDistrictRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillagesInDistrictRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.districtCode != null && Object.hasOwnProperty.call(message, "districtCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.districtCode);
            return writer;
        };

        /**
         * Encodes the specified GetVillagesInDistrictRequest message, length delimited. Does not implicitly {@link lokaid.GetVillagesInDistrictRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {lokaid.IGetVillagesInDistrictRequest} message GetVillagesInDistrictRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillagesInDistrictRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVillagesInDistrictRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetVillagesInDistrictRequest} GetVillagesInDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillagesInDistrictRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetVillagesInDistrictRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.districtCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVillagesInDistrictRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetVillagesInDistrictRequest} GetVillagesInDistrictRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillagesInDistrictRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVillagesInDistrictRequest message.
         * @function verify
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVillagesInDistrictRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.districtCode != null && message.hasOwnProperty("districtCode"))
                if (!$util.isString(message.districtCode))
                    return "districtCode: string expected";
            return null;
        };

        /**
         * Creates a GetVillagesInDistrictRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetVillagesInDistrictRequest} GetVillagesInDistrictRequest
         */
        GetVillagesInDistrictRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetVillagesInDistrictRequest)
                return object;
            let message = new $root.lokaid.GetVillagesInDistrictRequest();
            if (object.districtCode != null)
                message.districtCode = String(object.districtCode);
            return message;
        };

        /**
         * Creates a plain object from a GetVillagesInDistrictRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {lokaid.GetVillagesInDistrictRequest} message GetVillagesInDistrictRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVillagesInDistrictRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.districtCode = "";
            if (message.districtCode != null && message.hasOwnProperty("districtCode"))
                object.districtCode = message.districtCode;
            return object;
        };

        /**
         * Converts this GetVillagesInDistrictRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVillagesInDistrictRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetVillagesInDistrictRequest
         * @function getTypeUrl
         * @memberof lokaid.GetVillagesInDistrictRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetVillagesInDistrictRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetVillagesInDistrictRequest";
        };

        return GetVillagesInDistrictRequest;
    })();

    lokaid.GetVillagesInDistrictResponse = (function() {

        /**
         * Properties of a GetVillagesInDistrictResponse.
         * @memberof lokaid
         * @interface IGetVillagesInDistrictResponse
         * @property {Array.<lokaid.IAddressData>|null} [villages] GetVillagesInDistrictResponse villages
         */

        /**
         * Constructs a new GetVillagesInDistrictResponse.
         * @memberof lokaid
         * @classdesc Represents a GetVillagesInDistrictResponse.
         * @implements IGetVillagesInDistrictResponse
         * @constructor
         * @param {lokaid.IGetVillagesInDistrictResponse=} [properties] Properties to set
         */
        function GetVillagesInDistrictResponse(properties) {
            this.villages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVillagesInDistrictResponse villages.
         * @member {Array.<lokaid.IAddressData>} villages
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @instance
         */
        GetVillagesInDistrictResponse.prototype.villages = $util.emptyArray;

        /**
         * Creates a new GetVillagesInDistrictResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {lokaid.IGetVillagesInDistrictResponse=} [properties] Properties to set
         * @returns {lokaid.GetVillagesInDistrictResponse} GetVillagesInDistrictResponse instance
         */
        GetVillagesInDistrictResponse.create = function create(properties) {
            return new GetVillagesInDistrictResponse(properties);
        };

        /**
         * Encodes the specified GetVillagesInDistrictResponse message. Does not implicitly {@link lokaid.GetVillagesInDistrictResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {lokaid.IGetVillagesInDistrictResponse} message GetVillagesInDistrictResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillagesInDistrictResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.villages != null && message.villages.length)
                for (let i = 0; i < message.villages.length; ++i)
                    $root.lokaid.AddressData.encode(message.villages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVillagesInDistrictResponse message, length delimited. Does not implicitly {@link lokaid.GetVillagesInDistrictResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {lokaid.IGetVillagesInDistrictResponse} message GetVillagesInDistrictResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillagesInDistrictResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVillagesInDistrictResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetVillagesInDistrictResponse} GetVillagesInDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillagesInDistrictResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetVillagesInDistrictResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.villages && message.villages.length))
                            message.villages = [];
                        message.villages.push($root.lokaid.AddressData.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVillagesInDistrictResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetVillagesInDistrictResponse} GetVillagesInDistrictResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillagesInDistrictResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVillagesInDistrictResponse message.
         * @function verify
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVillagesInDistrictResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.villages != null && message.hasOwnProperty("villages")) {
                if (!Array.isArray(message.villages))
                    return "villages: array expected";
                for (let i = 0; i < message.villages.length; ++i) {
                    let error = $root.lokaid.AddressData.verify(message.villages[i]);
                    if (error)
                        return "villages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetVillagesInDistrictResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetVillagesInDistrictResponse} GetVillagesInDistrictResponse
         */
        GetVillagesInDistrictResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetVillagesInDistrictResponse)
                return object;
            let message = new $root.lokaid.GetVillagesInDistrictResponse();
            if (object.villages) {
                if (!Array.isArray(object.villages))
                    throw TypeError(".lokaid.GetVillagesInDistrictResponse.villages: array expected");
                message.villages = [];
                for (let i = 0; i < object.villages.length; ++i) {
                    if (typeof object.villages[i] !== "object")
                        throw TypeError(".lokaid.GetVillagesInDistrictResponse.villages: object expected");
                    message.villages[i] = $root.lokaid.AddressData.fromObject(object.villages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetVillagesInDistrictResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {lokaid.GetVillagesInDistrictResponse} message GetVillagesInDistrictResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVillagesInDistrictResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.villages = [];
            if (message.villages && message.villages.length) {
                object.villages = [];
                for (let j = 0; j < message.villages.length; ++j)
                    object.villages[j] = $root.lokaid.AddressData.toObject(message.villages[j], options);
            }
            return object;
        };

        /**
         * Converts this GetVillagesInDistrictResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVillagesInDistrictResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetVillagesInDistrictResponse
         * @function getTypeUrl
         * @memberof lokaid.GetVillagesInDistrictResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetVillagesInDistrictResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetVillagesInDistrictResponse";
        };

        return GetVillagesInDistrictResponse;
    })();

    lokaid.GetVillageRequest = (function() {

        /**
         * Properties of a GetVillageRequest.
         * @memberof lokaid
         * @interface IGetVillageRequest
         * @property {string|null} [villageCode] GetVillageRequest villageCode
         */

        /**
         * Constructs a new GetVillageRequest.
         * @memberof lokaid
         * @classdesc Represents a GetVillageRequest.
         * @implements IGetVillageRequest
         * @constructor
         * @param {lokaid.IGetVillageRequest=} [properties] Properties to set
         */
        function GetVillageRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVillageRequest villageCode.
         * @member {string} villageCode
         * @memberof lokaid.GetVillageRequest
         * @instance
         */
        GetVillageRequest.prototype.villageCode = "";

        /**
         * Creates a new GetVillageRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {lokaid.IGetVillageRequest=} [properties] Properties to set
         * @returns {lokaid.GetVillageRequest} GetVillageRequest instance
         */
        GetVillageRequest.create = function create(properties) {
            return new GetVillageRequest(properties);
        };

        /**
         * Encodes the specified GetVillageRequest message. Does not implicitly {@link lokaid.GetVillageRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {lokaid.IGetVillageRequest} message GetVillageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillageRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.villageCode != null && Object.hasOwnProperty.call(message, "villageCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.villageCode);
            return writer;
        };

        /**
         * Encodes the specified GetVillageRequest message, length delimited. Does not implicitly {@link lokaid.GetVillageRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {lokaid.IGetVillageRequest} message GetVillageRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillageRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVillageRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetVillageRequest} GetVillageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillageRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetVillageRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.villageCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVillageRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetVillageRequest} GetVillageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillageRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVillageRequest message.
         * @function verify
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVillageRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.villageCode != null && message.hasOwnProperty("villageCode"))
                if (!$util.isString(message.villageCode))
                    return "villageCode: string expected";
            return null;
        };

        /**
         * Creates a GetVillageRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetVillageRequest} GetVillageRequest
         */
        GetVillageRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetVillageRequest)
                return object;
            let message = new $root.lokaid.GetVillageRequest();
            if (object.villageCode != null)
                message.villageCode = String(object.villageCode);
            return message;
        };

        /**
         * Creates a plain object from a GetVillageRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {lokaid.GetVillageRequest} message GetVillageRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVillageRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.villageCode = "";
            if (message.villageCode != null && message.hasOwnProperty("villageCode"))
                object.villageCode = message.villageCode;
            return object;
        };

        /**
         * Converts this GetVillageRequest to JSON.
         * @function toJSON
         * @memberof lokaid.GetVillageRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVillageRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetVillageRequest
         * @function getTypeUrl
         * @memberof lokaid.GetVillageRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetVillageRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetVillageRequest";
        };

        return GetVillageRequest;
    })();

    lokaid.GetVillageResponse = (function() {

        /**
         * Properties of a GetVillageResponse.
         * @memberof lokaid
         * @interface IGetVillageResponse
         * @property {lokaid.IAddressData|null} [village] GetVillageResponse village
         */

        /**
         * Constructs a new GetVillageResponse.
         * @memberof lokaid
         * @classdesc Represents a GetVillageResponse.
         * @implements IGetVillageResponse
         * @constructor
         * @param {lokaid.IGetVillageResponse=} [properties] Properties to set
         */
        function GetVillageResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetVillageResponse village.
         * @member {lokaid.IAddressData|null|undefined} village
         * @memberof lokaid.GetVillageResponse
         * @instance
         */
        GetVillageResponse.prototype.village = null;

        /**
         * Creates a new GetVillageResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {lokaid.IGetVillageResponse=} [properties] Properties to set
         * @returns {lokaid.GetVillageResponse} GetVillageResponse instance
         */
        GetVillageResponse.create = function create(properties) {
            return new GetVillageResponse(properties);
        };

        /**
         * Encodes the specified GetVillageResponse message. Does not implicitly {@link lokaid.GetVillageResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {lokaid.IGetVillageResponse} message GetVillageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillageResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.village != null && Object.hasOwnProperty.call(message, "village"))
                $root.lokaid.AddressData.encode(message.village, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetVillageResponse message, length delimited. Does not implicitly {@link lokaid.GetVillageResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {lokaid.IGetVillageResponse} message GetVillageResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetVillageResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetVillageResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.GetVillageResponse} GetVillageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillageResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.GetVillageResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.village = $root.lokaid.AddressData.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetVillageResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.GetVillageResponse} GetVillageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetVillageResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetVillageResponse message.
         * @function verify
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetVillageResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.village != null && message.hasOwnProperty("village")) {
                let error = $root.lokaid.AddressData.verify(message.village);
                if (error)
                    return "village." + error;
            }
            return null;
        };

        /**
         * Creates a GetVillageResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.GetVillageResponse} GetVillageResponse
         */
        GetVillageResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.GetVillageResponse)
                return object;
            let message = new $root.lokaid.GetVillageResponse();
            if (object.village != null) {
                if (typeof object.village !== "object")
                    throw TypeError(".lokaid.GetVillageResponse.village: object expected");
                message.village = $root.lokaid.AddressData.fromObject(object.village);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetVillageResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {lokaid.GetVillageResponse} message GetVillageResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetVillageResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.village = null;
            if (message.village != null && message.hasOwnProperty("village"))
                object.village = $root.lokaid.AddressData.toObject(message.village, options);
            return object;
        };

        /**
         * Converts this GetVillageResponse to JSON.
         * @function toJSON
         * @memberof lokaid.GetVillageResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetVillageResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetVillageResponse
         * @function getTypeUrl
         * @memberof lokaid.GetVillageResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetVillageResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.GetVillageResponse";
        };

        return GetVillageResponse;
    })();

    lokaid.HealthCheckRequest = (function() {

        /**
         * Properties of a HealthCheckRequest.
         * @memberof lokaid
         * @interface IHealthCheckRequest
         */

        /**
         * Constructs a new HealthCheckRequest.
         * @memberof lokaid
         * @classdesc Represents a HealthCheckRequest.
         * @implements IHealthCheckRequest
         * @constructor
         * @param {lokaid.IHealthCheckRequest=} [properties] Properties to set
         */
        function HealthCheckRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HealthCheckRequest instance using the specified properties.
         * @function create
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {lokaid.IHealthCheckRequest=} [properties] Properties to set
         * @returns {lokaid.HealthCheckRequest} HealthCheckRequest instance
         */
        HealthCheckRequest.create = function create(properties) {
            return new HealthCheckRequest(properties);
        };

        /**
         * Encodes the specified HealthCheckRequest message. Does not implicitly {@link lokaid.HealthCheckRequest.verify|verify} messages.
         * @function encode
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {lokaid.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HealthCheckRequest message, length delimited. Does not implicitly {@link lokaid.HealthCheckRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {lokaid.IHealthCheckRequest} message HealthCheckRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.HealthCheckRequest} HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckRequest.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.HealthCheckRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HealthCheckRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.HealthCheckRequest} HealthCheckRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HealthCheckRequest message.
         * @function verify
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HealthCheckRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HealthCheckRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.HealthCheckRequest} HealthCheckRequest
         */
        HealthCheckRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.HealthCheckRequest)
                return object;
            return new $root.lokaid.HealthCheckRequest();
        };

        /**
         * Creates a plain object from a HealthCheckRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {lokaid.HealthCheckRequest} message HealthCheckRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HealthCheckRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HealthCheckRequest to JSON.
         * @function toJSON
         * @memberof lokaid.HealthCheckRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HealthCheckRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HealthCheckRequest
         * @function getTypeUrl
         * @memberof lokaid.HealthCheckRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HealthCheckRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.HealthCheckRequest";
        };

        return HealthCheckRequest;
    })();

    lokaid.HealthCheckResponse = (function() {

        /**
         * Properties of a HealthCheckResponse.
         * @memberof lokaid
         * @interface IHealthCheckResponse
         * @property {string|null} [status] HealthCheckResponse status
         * @property {string|null} [version] HealthCheckResponse version
         * @property {string|null} [timestamp] HealthCheckResponse timestamp
         */

        /**
         * Constructs a new HealthCheckResponse.
         * @memberof lokaid
         * @classdesc Represents a HealthCheckResponse.
         * @implements IHealthCheckResponse
         * @constructor
         * @param {lokaid.IHealthCheckResponse=} [properties] Properties to set
         */
        function HealthCheckResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HealthCheckResponse status.
         * @member {string} status
         * @memberof lokaid.HealthCheckResponse
         * @instance
         */
        HealthCheckResponse.prototype.status = "";

        /**
         * HealthCheckResponse version.
         * @member {string} version
         * @memberof lokaid.HealthCheckResponse
         * @instance
         */
        HealthCheckResponse.prototype.version = "";

        /**
         * HealthCheckResponse timestamp.
         * @member {string} timestamp
         * @memberof lokaid.HealthCheckResponse
         * @instance
         */
        HealthCheckResponse.prototype.timestamp = "";

        /**
         * Creates a new HealthCheckResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {lokaid.IHealthCheckResponse=} [properties] Properties to set
         * @returns {lokaid.HealthCheckResponse} HealthCheckResponse instance
         */
        HealthCheckResponse.create = function create(properties) {
            return new HealthCheckResponse(properties);
        };

        /**
         * Encodes the specified HealthCheckResponse message. Does not implicitly {@link lokaid.HealthCheckResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {lokaid.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.status);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified HealthCheckResponse message, length delimited. Does not implicitly {@link lokaid.HealthCheckResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {lokaid.IHealthCheckResponse} message HealthCheckResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HealthCheckResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.HealthCheckResponse} HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.HealthCheckResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.status = reader.string();
                        break;
                    }
                case 2: {
                        message.version = reader.string();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HealthCheckResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.HealthCheckResponse} HealthCheckResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HealthCheckResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HealthCheckResponse message.
         * @function verify
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HealthCheckResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isString(message.timestamp))
                    return "timestamp: string expected";
            return null;
        };

        /**
         * Creates a HealthCheckResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.HealthCheckResponse} HealthCheckResponse
         */
        HealthCheckResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.HealthCheckResponse)
                return object;
            let message = new $root.lokaid.HealthCheckResponse();
            if (object.status != null)
                message.status = String(object.status);
            if (object.version != null)
                message.version = String(object.version);
            if (object.timestamp != null)
                message.timestamp = String(object.timestamp);
            return message;
        };

        /**
         * Creates a plain object from a HealthCheckResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {lokaid.HealthCheckResponse} message HealthCheckResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HealthCheckResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.status = "";
                object.version = "";
                object.timestamp = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };

        /**
         * Converts this HealthCheckResponse to JSON.
         * @function toJSON
         * @memberof lokaid.HealthCheckResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HealthCheckResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HealthCheckResponse
         * @function getTypeUrl
         * @memberof lokaid.HealthCheckResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HealthCheckResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.HealthCheckResponse";
        };

        return HealthCheckResponse;
    })();

    lokaid.ErrorResponse = (function() {

        /**
         * Properties of an ErrorResponse.
         * @memberof lokaid
         * @interface IErrorResponse
         * @property {string|null} [error] ErrorResponse error
         * @property {number|null} [status] ErrorResponse status
         * @property {string|null} [timestamp] ErrorResponse timestamp
         * @property {string|null} [path] ErrorResponse path
         */

        /**
         * Constructs a new ErrorResponse.
         * @memberof lokaid
         * @classdesc Represents an ErrorResponse.
         * @implements IErrorResponse
         * @constructor
         * @param {lokaid.IErrorResponse=} [properties] Properties to set
         */
        function ErrorResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ErrorResponse error.
         * @member {string} error
         * @memberof lokaid.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.error = "";

        /**
         * ErrorResponse status.
         * @member {number} status
         * @memberof lokaid.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.status = 0;

        /**
         * ErrorResponse timestamp.
         * @member {string} timestamp
         * @memberof lokaid.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.timestamp = "";

        /**
         * ErrorResponse path.
         * @member {string} path
         * @memberof lokaid.ErrorResponse
         * @instance
         */
        ErrorResponse.prototype.path = "";

        /**
         * Creates a new ErrorResponse instance using the specified properties.
         * @function create
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {lokaid.IErrorResponse=} [properties] Properties to set
         * @returns {lokaid.ErrorResponse} ErrorResponse instance
         */
        ErrorResponse.create = function create(properties) {
            return new ErrorResponse(properties);
        };

        /**
         * Encodes the specified ErrorResponse message. Does not implicitly {@link lokaid.ErrorResponse.verify|verify} messages.
         * @function encode
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {lokaid.IErrorResponse} message ErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.error);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.path);
            return writer;
        };

        /**
         * Encodes the specified ErrorResponse message, length delimited. Does not implicitly {@link lokaid.ErrorResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {lokaid.IErrorResponse} message ErrorResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ErrorResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ErrorResponse message from the specified reader or buffer.
         * @function decode
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lokaid.ErrorResponse} ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorResponse.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lokaid.ErrorResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.error = reader.string();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 3: {
                        message.timestamp = reader.string();
                        break;
                    }
                case 4: {
                        message.path = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ErrorResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lokaid.ErrorResponse} ErrorResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ErrorResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ErrorResponse message.
         * @function verify
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ErrorResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isString(message.timestamp))
                    return "timestamp: string expected";
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            return null;
        };

        /**
         * Creates an ErrorResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lokaid.ErrorResponse} ErrorResponse
         */
        ErrorResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.lokaid.ErrorResponse)
                return object;
            let message = new $root.lokaid.ErrorResponse();
            if (object.error != null)
                message.error = String(object.error);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.timestamp != null)
                message.timestamp = String(object.timestamp);
            if (object.path != null)
                message.path = String(object.path);
            return message;
        };

        /**
         * Creates a plain object from an ErrorResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {lokaid.ErrorResponse} message ErrorResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ErrorResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.error = "";
                object.status = 0;
                object.timestamp = "";
                object.path = "";
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = message.error;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            return object;
        };

        /**
         * Converts this ErrorResponse to JSON.
         * @function toJSON
         * @memberof lokaid.ErrorResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ErrorResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ErrorResponse
         * @function getTypeUrl
         * @memberof lokaid.ErrorResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ErrorResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/lokaid.ErrorResponse";
        };

        return ErrorResponse;
    })();

    lokaid.AddressService = (function() {

        /**
         * Constructs a new AddressService service.
         * @memberof lokaid
         * @classdesc Represents an AddressService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function AddressService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (AddressService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AddressService;

        /**
         * Creates new AddressService service using the specified rpc implementation.
         * @function create
         * @memberof lokaid.AddressService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {AddressService} RPC service. Useful where requests and/or responses are streamed.
         */
        AddressService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link lokaid.AddressService#getAllStates}.
         * @memberof lokaid.AddressService
         * @typedef GetAllStatesCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetAllStatesResponse} [response] GetAllStatesResponse
         */

        /**
         * Calls GetAllStates.
         * @function getAllStates
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetAllStatesRequest} request GetAllStatesRequest message or plain object
         * @param {lokaid.AddressService.GetAllStatesCallback} callback Node-style callback called with the error, if any, and GetAllStatesResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getAllStates = function getAllStates(request, callback) {
            return this.rpcCall(getAllStates, $root.lokaid.GetAllStatesRequest, $root.lokaid.GetAllStatesResponse, request, callback);
        }, "name", { value: "GetAllStates" });

        /**
         * Calls GetAllStates.
         * @function getAllStates
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetAllStatesRequest} request GetAllStatesRequest message or plain object
         * @returns {Promise<lokaid.GetAllStatesResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getState}.
         * @memberof lokaid.AddressService
         * @typedef GetStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetStateResponse} [response] GetStateResponse
         */

        /**
         * Calls GetState.
         * @function getState
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetStateRequest} request GetStateRequest message or plain object
         * @param {lokaid.AddressService.GetStateCallback} callback Node-style callback called with the error, if any, and GetStateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getState = function getState(request, callback) {
            return this.rpcCall(getState, $root.lokaid.GetStateRequest, $root.lokaid.GetStateResponse, request, callback);
        }, "name", { value: "GetState" });

        /**
         * Calls GetState.
         * @function getState
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetStateRequest} request GetStateRequest message or plain object
         * @returns {Promise<lokaid.GetStateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getCitiesInState}.
         * @memberof lokaid.AddressService
         * @typedef GetCitiesInStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetCitiesInStateResponse} [response] GetCitiesInStateResponse
         */

        /**
         * Calls GetCitiesInState.
         * @function getCitiesInState
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetCitiesInStateRequest} request GetCitiesInStateRequest message or plain object
         * @param {lokaid.AddressService.GetCitiesInStateCallback} callback Node-style callback called with the error, if any, and GetCitiesInStateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getCitiesInState = function getCitiesInState(request, callback) {
            return this.rpcCall(getCitiesInState, $root.lokaid.GetCitiesInStateRequest, $root.lokaid.GetCitiesInStateResponse, request, callback);
        }, "name", { value: "GetCitiesInState" });

        /**
         * Calls GetCitiesInState.
         * @function getCitiesInState
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetCitiesInStateRequest} request GetCitiesInStateRequest message or plain object
         * @returns {Promise<lokaid.GetCitiesInStateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getCity}.
         * @memberof lokaid.AddressService
         * @typedef GetCityCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetCityResponse} [response] GetCityResponse
         */

        /**
         * Calls GetCity.
         * @function getCity
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetCityRequest} request GetCityRequest message or plain object
         * @param {lokaid.AddressService.GetCityCallback} callback Node-style callback called with the error, if any, and GetCityResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getCity = function getCity(request, callback) {
            return this.rpcCall(getCity, $root.lokaid.GetCityRequest, $root.lokaid.GetCityResponse, request, callback);
        }, "name", { value: "GetCity" });

        /**
         * Calls GetCity.
         * @function getCity
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetCityRequest} request GetCityRequest message or plain object
         * @returns {Promise<lokaid.GetCityResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getDistrictsInCity}.
         * @memberof lokaid.AddressService
         * @typedef GetDistrictsInCityCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetDistrictsInCityResponse} [response] GetDistrictsInCityResponse
         */

        /**
         * Calls GetDistrictsInCity.
         * @function getDistrictsInCity
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetDistrictsInCityRequest} request GetDistrictsInCityRequest message or plain object
         * @param {lokaid.AddressService.GetDistrictsInCityCallback} callback Node-style callback called with the error, if any, and GetDistrictsInCityResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getDistrictsInCity = function getDistrictsInCity(request, callback) {
            return this.rpcCall(getDistrictsInCity, $root.lokaid.GetDistrictsInCityRequest, $root.lokaid.GetDistrictsInCityResponse, request, callback);
        }, "name", { value: "GetDistrictsInCity" });

        /**
         * Calls GetDistrictsInCity.
         * @function getDistrictsInCity
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetDistrictsInCityRequest} request GetDistrictsInCityRequest message or plain object
         * @returns {Promise<lokaid.GetDistrictsInCityResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getDistrict}.
         * @memberof lokaid.AddressService
         * @typedef GetDistrictCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetDistrictResponse} [response] GetDistrictResponse
         */

        /**
         * Calls GetDistrict.
         * @function getDistrict
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetDistrictRequest} request GetDistrictRequest message or plain object
         * @param {lokaid.AddressService.GetDistrictCallback} callback Node-style callback called with the error, if any, and GetDistrictResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getDistrict = function getDistrict(request, callback) {
            return this.rpcCall(getDistrict, $root.lokaid.GetDistrictRequest, $root.lokaid.GetDistrictResponse, request, callback);
        }, "name", { value: "GetDistrict" });

        /**
         * Calls GetDistrict.
         * @function getDistrict
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetDistrictRequest} request GetDistrictRequest message or plain object
         * @returns {Promise<lokaid.GetDistrictResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getVillagesInDistrict}.
         * @memberof lokaid.AddressService
         * @typedef GetVillagesInDistrictCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetVillagesInDistrictResponse} [response] GetVillagesInDistrictResponse
         */

        /**
         * Calls GetVillagesInDistrict.
         * @function getVillagesInDistrict
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetVillagesInDistrictRequest} request GetVillagesInDistrictRequest message or plain object
         * @param {lokaid.AddressService.GetVillagesInDistrictCallback} callback Node-style callback called with the error, if any, and GetVillagesInDistrictResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getVillagesInDistrict = function getVillagesInDistrict(request, callback) {
            return this.rpcCall(getVillagesInDistrict, $root.lokaid.GetVillagesInDistrictRequest, $root.lokaid.GetVillagesInDistrictResponse, request, callback);
        }, "name", { value: "GetVillagesInDistrict" });

        /**
         * Calls GetVillagesInDistrict.
         * @function getVillagesInDistrict
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetVillagesInDistrictRequest} request GetVillagesInDistrictRequest message or plain object
         * @returns {Promise<lokaid.GetVillagesInDistrictResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#getVillage}.
         * @memberof lokaid.AddressService
         * @typedef GetVillageCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.GetVillageResponse} [response] GetVillageResponse
         */

        /**
         * Calls GetVillage.
         * @function getVillage
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetVillageRequest} request GetVillageRequest message or plain object
         * @param {lokaid.AddressService.GetVillageCallback} callback Node-style callback called with the error, if any, and GetVillageResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.getVillage = function getVillage(request, callback) {
            return this.rpcCall(getVillage, $root.lokaid.GetVillageRequest, $root.lokaid.GetVillageResponse, request, callback);
        }, "name", { value: "GetVillage" });

        /**
         * Calls GetVillage.
         * @function getVillage
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IGetVillageRequest} request GetVillageRequest message or plain object
         * @returns {Promise<lokaid.GetVillageResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link lokaid.AddressService#healthCheck}.
         * @memberof lokaid.AddressService
         * @typedef HealthCheckCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {lokaid.HealthCheckResponse} [response] HealthCheckResponse
         */

        /**
         * Calls HealthCheck.
         * @function healthCheck
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IHealthCheckRequest} request HealthCheckRequest message or plain object
         * @param {lokaid.AddressService.HealthCheckCallback} callback Node-style callback called with the error, if any, and HealthCheckResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(AddressService.prototype.healthCheck = function healthCheck(request, callback) {
            return this.rpcCall(healthCheck, $root.lokaid.HealthCheckRequest, $root.lokaid.HealthCheckResponse, request, callback);
        }, "name", { value: "HealthCheck" });

        /**
         * Calls HealthCheck.
         * @function healthCheck
         * @memberof lokaid.AddressService
         * @instance
         * @param {lokaid.IHealthCheckRequest} request HealthCheckRequest message or plain object
         * @returns {Promise<lokaid.HealthCheckResponse>} Promise
         * @variation 2
         */

        return AddressService;
    })();

    return lokaid;
})();

export { $root as default };
