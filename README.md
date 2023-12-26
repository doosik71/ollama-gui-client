# Ollama GUI Client

## Ollama 서버를 서비스로 재등록하기

```bash
sudo systemctl stop ollama
sudo cp ollama.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl start ollama
sudo systemctl status ollama

export OLLAMA_HOST=129.254.233.72:11434
export OLLAMA_ORIGINS=http://*:8086
ollama pull llama2
ollama pull mistral
ollama pull orca2
```

## Ollama client 서비스 등록하기

```bash
sudo cp ollama_gui_client.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable ollama_gui_client
sudo systemctl start ollama_gui_client
sudo systemctl status ollama_gui_client
sudo ufw allow 8086
```

## IP 및 포트를 허용한다.

```bash
sudo vi /etc/systemd/system/ollama.service
```

```text
[Service]
Environment="OLLAMA_HOST=129.254.233.72:11434"
Environment="OLLAMA_ORIGINS=http://*:8086"
```

## 서비스를 다시 시작한다

```bash
sudo systemctl daemon-reload
sudo systemctl start ollama
systemctl status ollama
```

## 웹 브라우저에서 연결을 확인한다

<http://localhost:11434/>

## 모델을 다운로드한다

```bash
ollama pull mistral
ollama pull orca2
ollama pull llama2
```

## 로그를 확인한다

```bash
journalctl -u ollama | tail
```

# 서버로 실행하는 방법

```bash
export OLLAMA_HOST=127.0.0.1:11434
export OLLAMA_ORIGINS=http://127.0.0.1:*
ollama serve
ollama pull mistral
ollama pull orca2
ollama pull llama2
```

# 포트 허용하기

```bash
sudo ufw allow 11434
sudo ufw allow 8086
```

# 실행 확인하기

- <http://localhost:11434/>
- <http://localhost:8086/>
